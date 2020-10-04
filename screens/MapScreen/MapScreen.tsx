import React, { useEffect, useState } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import styles from './styles'
import MapView, { Region, Marker, Callout } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync, LocationAccuracy } from 'expo-location'
import ObjectCoordsType from './ObjectCoordsType'
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
    StatusBar.setHidden(true)
    const [currentRegion, setCurrentRegion] = useState<Region>();
    const navigation = useNavigation();
    
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
    }, []);

    return (
        <>
            <MapView initialRegion={currentRegion} style={styles.mapView}>
                <Marker coordinate={{latitude: -23.488526, longitude: -46.6396489}}/>
                <Marker coordinate={{latitude: -23.487286, longitude: -46.642986}}>
                    <Image style={styles.markerImage} source={require("../../assets/images/bakerImage.png")}/>
                    <Callout onPress={() => {
                        navigation.navigate("BottomTabNavigator", {bakeryId: "5efa76054190182af23595af"})
                    }}>
                        <View style={styles.callout}>
                            <Text style={styles.bakeryName}>Padaria do Zezé</Text>
                            <Text style={styles.opened}>ABERTA</Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>
            <Image resizeMode="contain"  style={styles.imageHeader} source={require("../../assets/images/headerImageDailyBakery.png")}/>    
        </>
    )
}


export default MapScreen;