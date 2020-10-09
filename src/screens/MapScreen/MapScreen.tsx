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
    const [userLocation, setUserLocation] = useState({latitude:0, longitude:0});
    const [currentRegion, setCurrentRegion] = useState<Region>();
    const navigation = useNavigation();
    const [bakeries, setBakeries] = useState<BakeryInterface[]>([])
    const [appearReturnButton, setAppearReturnButton] = useState(false);

    let state = {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04
    };
    
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

    function handleRegionChanged(region: Region){
        setAppearReturnButton(true)
        setCurrentRegion(region)
        loadBakeries();
    }

    async function loadBakeryByName(){
        let latitude : number = 0, longitude : number = 0;
        await getBakeryByName("").then(response => {
            latitude: Number(response.latitude)
            longitude: Number(response.longitude)
        }).catch(error => {
            console.log(error)
        })

        const obj = {
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04
        }

        setCurrentRegion(obj);
        loadBakeries();
    }

    useEffect(()=>{
        loadBakeries();
    }, [currentRegion])

    useFocusEffect(
        React.useCallback(() => {
          const onBackPress = () => {
            return true;
          };

          loadInitialPosition();
          loadBakeries();

          BackHandler.addEventListener('hardwareBackPress', onBackPress);
    
          return () =>
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [])
      );

    async function loadInitialPosition(){
        const {granted} = await requestPermissionsAsync();

        if(granted) {
            const {coords} = await getCurrentPositionAsync({
                accuracy: LocationAccuracy.High
            });

            const {latitude, longitude} = coords;

            setUserLocation({latitude, longitude})

            const obj = {
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.04,
                longitudeDelta: 0.04
            }

            setCurrentRegion(obj)
        }
    }

    async function returnToInitialPosition(){
        const obj = {
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04
        }
        setAppearReturnButton(false)

        setCurrentRegion(obj)
    }

    return (
        <>
            <MapView onRegionChangeComplete={handleRegionChanged} initialRegion={currentRegion} style={styles.mapView}>
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
            {appearReturnButton ? <View style={[styles.searchForm, {marginBottom: 60}]}>
                <View 
                    style={styles.viewReturn}/>
                <TouchableOpacity onPress={() => {returnToInitialPosition()}} style={[styles.loadButton, {backgroundColor: "grey"}]}>
                    <MaterialIcons name="keyboard-return" size={20} color="white"/>
                </TouchableOpacity>
            </View> : <></>}
            <View style={[styles.searchForm]}>
                <TextInput 
                    style={styles.searchInput} 
                    placeholder="Buscar padarias por nome..."
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    onChangeText={(text) => {
                    }}
                />
                <TouchableOpacity onPress={() => {}} style={styles.loadButton}>
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
                        navigation.navigate("Root")
                    
                    if(item.value === 'logout')
                        navigation.navigate("Root")
                }}
            />
        </>
    )
}


export default MapScreen;