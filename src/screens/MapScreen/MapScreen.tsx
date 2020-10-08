import React, { useEffect, useState } from 'react';
import { View, Text, Image, StatusBar, BackHandler } from 'react-native';
import styles from './styles'
import MapView, { Region, Marker, Callout } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync, LocationAccuracy } from 'expo-location'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import {Feather, MaterialIcons} from '@expo/vector-icons'
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import getBakeriesByLatitudeAndLongitude from "../../services/MapServices/MapServices";
import BakeryInterface from '../../Interfaces/BakeryInterface';

const MapScreen = () => {
    StatusBar.setHidden(true)
    const [currentRegion, setCurrentRegion] = useState<Region>();
    const navigation = useNavigation();
    const [bakeries, setBakeries] = useState<BakeryInterface[]>([])
    
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
        setCurrentRegion(region)
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
        async function loadInitialPosition(){
            const {granted} = await requestPermissionsAsync();

            if(granted) {
                const {coords} = await getCurrentPositionAsync({
                    accuracy: LocationAccuracy.High
                });

                const {latitude, longitude} = coords;

                const obj = {
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04
                }
  
                setCurrentRegion(obj)
            }
        }
        loadInitialPosition();
        loadBakeries();
    }, []);

    return (
        <>
            <MapView onRegionChangeComplete={handleRegionChanged} initialRegion={currentRegion} style={styles.mapView}>
                <Marker coordinate={{latitude: -23.488526, longitude: -46.6396489}}/>
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
                />
                <TouchableOpacity onPress={() => {loadBakeries()}} style={styles.loadButton}>
                    <MaterialIcons name="my-location" size={20} color="white"/>
                </TouchableOpacity>
            </View>
            <Image resizeMode="contain"  style={styles.imageHeader} source={require("../../../assets/images/headerImageDailyBakery.png")}/>    
        </>
    )
}


export default MapScreen;