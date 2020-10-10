import React, { useEffect, useState } from 'react';
import { View, Text, Image, StatusBar, BackHandler } from 'react-native';
import styles from './styles'
import MapView, { Region, Marker, Callout } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync, LocationAccuracy } from 'expo-location'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import {Feather, MaterialIcons} from '@expo/vector-icons'
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import getBakeriesByLatitudeAndLongitude, {getBakeryByName} from "../../services/MapServices/MapServices";
import BakeryInterface from '../../Interfaces/BakeryInterface';
import DropDownPicker from 'react-native-dropdown-picker';

const MapScreen = () => {
    StatusBar.setHidden(true)
    const [userLocation, setUserLocation] = useState({latitude:0, longitude:0, latitudeDelta: 0.04, longitudeDelta: 0.04});
    const [currentRegion, setCurrentRegion] = useState<Region>();
    const navigation = useNavigation();
    const [bakeries, setBakeries] = useState<BakeryInterface[]>([])
    const [bakeryName, setBakeryName] = useState("")
    
    async function loadBakeries(){
        const latitude = currentRegion?.latitude;
        const longitude = currentRegion?.longitude;
        let bakery;
        
        await getBakeriesByLatitudeAndLongitude(Number(latitude), Number(longitude)).then(response => {
            bakery = response;
            setBakeries(bakery);
        }).catch(error => {
            console.log(error)
        })
    }

    async function loadBakeryByName(){
        await getBakeryByName(bakeryName).then(response => {
            const obj = {
                latitude: response.latitude,
                longitude: response.longitude,
                latitudeDelta: 0.04,
                longitudeDelta: 0.04
            }
    
            setCurrentRegion(obj as Region);
        }).catch(error => {
            console.log(error)
        })
        
        loadBakeries();
    }

    useFocusEffect(
        React.useCallback(() => {
          const onBackPress = () => {
            return true;
          };

          BackHandler.addEventListener('hardwareBackPress', onBackPress);
    
          return () =>
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [])
      );
    
    useEffect(() => {
        loadInitialPosition();
        loadBakeries();
    }, [])

    async function loadInitialPosition(){
        const {granted} = await requestPermissionsAsync();

        if(granted) {
            const {coords} = await getCurrentPositionAsync({
                accuracy: LocationAccuracy.High
            });

            const {latitude, longitude} = coords;

            setUserLocation({latitude, longitude, latitudeDelta: 0.04, longitudeDelta: 0.04})

            const obj = {
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.04,
                longitudeDelta: 0.04
            }

            setCurrentRegion(obj)
        }
    }

    return (
        <>
            <MapView region={currentRegion} initialRegion={currentRegion} style={styles.mapView}>
                <Marker coordinate={
                        {
                            latitude: Number(userLocation.latitude),
                            longitude: Number(userLocation.longitude)
                        }
                    } style={{flexDirection: "column"}}
                    >
                    <Text style={{fontFamily: 'Poppins-Bold', alignSelf: "center"}}>Você está aqui!</Text>
                    <MaterialIcons name="person-pin-circle" style={{alignSelf: "center"}} color="#FEC044" size={45}/>
                </Marker>
                {bakeries.map(bakery => (
                    <Marker key={bakery._id} coordinate={{latitude: Number(bakery.latitude), longitude: Number(bakery.longitude)}}>
                        <Image style={styles.markerImage} source={require("../../../assets/images/bakerImage.png")}/>
                        <Callout onPress={() => {
                            navigation.navigate("BottomTabNavigator", {bakery})
                        }}>
                            <View style={styles.callout}>
                                <Text style={styles.bakeryName}>{bakery.nome}</Text>
                                <Text style={[styles.opened, {color: bakery.aberto_fechado ? "red" : "green"}]}>{bakery.aberto_fechado ? "FECHADO" : "ABERTO"}</Text>
                                <View style={styles.seeMoreView}> 
                                    <Text style={styles.info}>Clique aqui para ver mais</Text>
                                    <Feather style={styles.arrowRightIcon} name="arrow-right" color="#FEC044" size={15}/>
                                </View>
                            </View>
                        </Callout>
                    </Marker>
                ))}
            </MapView>
            
            <View style={[styles.searchForm]}>
                <TextInput 
                    style={styles.searchInput} 
                    placeholder="Buscar padarias por nome..."
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    onChangeText={(text) => {
                        setBakeryName(text)
                    }}
                />
                <TouchableOpacity onPress={() => {loadBakeryByName()}} style={styles.loadButton}>
                    <MaterialIcons name="my-location" size={20} color="white"/>
                </TouchableOpacity>
            </View>
            <Image resizeMode="contain"  style={styles.imageHeader} source={require("../../../assets/images/headerImageDailyBakery.png")}/>    
            <DropDownPicker
                items={[
                    {label: 'Meu Perfil', value: "profile", icon: () => <MaterialIcons onPress={() =>{}} name="perm-identity" size={18} color="#FEC044" />},
                    {label: 'Sair', value: 'logout', icon: () => <MaterialIcons name="power-settings-new" size={18} color="red" />},
                ]}
                containerStyle={{
                    width: '20%',
                    height: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    top: 10,
                    right: 10,
                }}
                style={{
                    backgroundColor: '#00000000',
                    borderColor: "#00000000"
                }}
                itemStyle={{
                    justifyContent: 'flex-start',
                }}
                placeholder=""
                customArrowDown={
                    () => (
                        <MaterialIcons name="menu" size={35} style={{alignSelf: 'center'}}/>
                    )
                }
                selectedLabelStyle={{
                    display: "none"
                }}
                dropDownStyle={{
                    backgroundColor: '#fafafa',
                    alignSelf: 'flex-end',
                    width: 150,
                }}
                onChangeItem={item => {
                    if(item.value === 'profile')
                        navigation.navigate("Profile")
                    
                    if(item.value === 'logout')
                        navigation.navigate("Root")
                }}
            />
        </>
    )
}


export default MapScreen;