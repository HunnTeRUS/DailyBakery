import { MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import BakeryInterface from '../../Interfaces/BakeryInterfaceDAO';
import styles from './styles'
import formatDateFromStringDate, { formatHourFromStringDate } from '../../utils/FormatDate'
import Cook from '../../../assets/svgs/Cook'
import Map from '../../../assets/svgs/Map'
import Clock from '../../../assets/svgs/Clock'
import NotificationPhone from '../../../assets/svgs/NotificationPhone'
import Closed from '../../../assets/svgs/Closed'
import Confirmation from '../../../assets/svgs/Confirmation'
import favoriteBakeryServices, { unFavoriteBakeryServices } from '../../services/FavoriteBakeryServices/FavoriteBakeryServices'
import getLoggedUser, { setAndChangeLoggedUser } from '../../utils/LoggedUser';
import UserInterface, {favorites} from '../../Interfaces/UserInterface';
import FavoriteNavigationInterface from '../../Interfaces/FavoriteNavigationInterface';
import { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Linking } from 'react-native';
import addRecentBakery from '../../services/RecentsServices/RecentBakeriesServices'

export default function TabOneScreen({ route }: any) {
  const navigation = useNavigation();
  const bakery = route.params as BakeryInterface;
  const [isFavorite, setFavorite] = React.useState(false)
  const obj : FavoriteNavigationInterface = {}

  useFocusEffect(() => {
    var loggedUser : UserInterface = {}

    async function getLogged(){
        loggedUser = await getLoggedUser();
    }

    async function verifyFavorites() {
      await getLogged()
      const favoritos = loggedUser.favoritos;

      if(favoritos) {
        const leng = favoritos.length;

        for (let i = 0; i < leng; i++) {
          if (favoritos[i]._id === bakery._id) {
            setFavorite(true)
          }
        }
      }
    }

    verifyFavorites()
  })

  async function favoriteBakery(bakeryId: String) {
    const loggedUser = await getLoggedUser();

    await favoriteBakeryServices(bakeryId).then(response => {  
      if (response[0].error === "" || response[0].error === undefined || response[0].error === null){
          let favoritesIdList : Array<favorites> = [];
          for (let i = 0; i<response.length; i++) {
              favoritesIdList.push({_id: response[i]._id})
          }
          loggedUser.favoritos = favoritesIdList
          setAndChangeLoggedUser(loggedUser)

          const obj : FavoriteNavigationInterface = {}

          obj.bakeries = response
          obj.method = "add"
          obj.bakeryName = String(loggedUser.nome)

          navigation.navigate("FavoriteScreen", obj)
        }
    }).catch(error => {
      console.log(error)
    });
  }

  async function unFavoriteBakery(bakeryId: String) {
    const loggedUser : UserInterface = await getLoggedUser();

    await unFavoriteBakeryServices(bakeryId).then(response => {
          let favoritesIdList : Array<favorites> = [];
          for (let i = 0; i<response.length; i++) {
              favoritesIdList.push({_id: response[i]._id})
          }

          loggedUser.favoritos = favoritesIdList
          setAndChangeLoggedUser(loggedUser)

          const obj : FavoriteNavigationInterface = {}

          obj.bakeries = response
          obj.method = "delete"
          obj.bakeryName = String(bakery.nome)

          navigation.navigate("FavoriteScreen", obj)
      }).catch(error => {
        console.log(error)
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.cookImage}>
        <Cook widthImage={300} />
        <Text style={{
          fontFamily: "Poppins-Bold", color: "white", alignSelf: 'center',
          marginTop: "5%", fontSize: 17
        }}>{bakery.nome}</Text>
      </View>

      <TouchableOpacity 
          style={{ 
            position: "absolute",
            top: 0,
            alignItems: "center",
            right: 25,
          }}
          onPress={() => {
            if (!isFavorite) {
              favoriteBakery(bakery._id);
            }
            else {
              unFavoriteBakery(bakery._id);
            }
          }}>
        <MaterialIcons name={isFavorite ? "star" : "star-border"} color="#FEC044" size={50} style={{}} />
        <Text style={{fontFamily: "Poppins-Bold", color: "#FEC044"}}>{isFavorite ? "Remover" : "Favoritar"}</Text>
      </TouchableOpacity>
      
      <View style={styles.secondContainer}>
        <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never" contentContainerStyle={{ alignItems: "center" }} bounces={true} style={styles.scrollView}>
          <View style={styles.beNotifiedContainer}>
            <View style={[styles.notificationIconContainer, { backgroundColor: "#F6F6F6" }]}>
              {bakery.aberto_fechado ? <Closed widthImage={80} heightImage={80} /> : <Confirmation widthImage={100} heightImage={100} />}
            </View>
            <View style={styles.notificationTextContainer}>
              <Text style={styles.notificationAlertText}>
                {bakery.aberto_fechado ? "Estamos fechados!" : "Estamos abertos!"}
              </Text>
              <Text style={styles.notificationInfoText}>
                Você pode solicitar para ser notificado e recebera o aviso jajá!
                  </Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => { 
            addRecentBakery(bakery._id)
            navigation.navigate("BeNotified", { bakery: bakery })
            }} style={styles.beNotifiedContainer}>
            <View style={styles.notificationIconContainer}>
              <NotificationPhone widthImage={80} heightImage={80} />
            </View>
            <View style={styles.notificationTextContainer}>
              <Text style={styles.notificationAlertText}>
                Ativar notificações
                  </Text>
              <Text style={styles.notificationInfoText}>
                Clique aqui para ser notificado na proxima fornada!
                  </Text>
              <MaterialIcons name="keyboard-arrow-right" size={25} style={styles.arrow} />
            </View>
          </TouchableOpacity>

          <View style={styles.beNotifiedContainer}>
            <View style={styles.fornadaIconContainer}>
              <Clock widthImage={100} heightImage={100} />
            </View>
            <View style={styles.notificationTextContainer}>
              <Text style={styles.notificationAlertText}>
                Ultima fornada
                </Text>
              <Text style={styles.notificationInfoText}>
                {formatDateFromStringDate(String(bakery.ultima_fornada ? bakery.ultima_fornada : ""))}
                {"\n"}
                {formatHourFromStringDate(String(bakery.ultima_fornada ? bakery.ultima_fornada : ""))}
              </Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => {       
            Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=walking&dir_action=navigate&destination=${bakery.location?.coordinates[0]},${bakery.location?.coordinates[1]}`) }} 
            style={[styles.beNotifiedContainer]}>
            <View style={[styles.notificationIconContainer, { backgroundColor: "#a3f6be" }]}>
              <Map widthImage={80} heightImage={80} />
            </View>
            <View style={styles.notificationTextContainer}>
              <Text style={styles.notificationAlertText}>
                Quero ir até lá!
                  </Text>
              <Text style={styles.notificationInfoText}>
                Clique aqui para ver o caminho ate esta padaria!
                  </Text>
              <MaterialIcons name="keyboard-arrow-right" size={25} style={styles.arrow} />
            </View>
          </TouchableOpacity>

          <View style={{height: 50}}>

          </View>

          
        </ScrollView>
      </View>


    </View>
  );
}