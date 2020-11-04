import { useNavigation, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import styles from './styles'
import { MaterialIcons } from '@expo/vector-icons';
import BakeryInterface from '../../Interfaces/BakeryInterfaceDAO';
import { useEffect } from 'react';
import getBakeriesByIdList from '../../services/BakeryServices/BakeryServices'
import UserInterface, { favorites } from '../../Interfaces/UserInterface';
import Deny from '../../../assets/svgs/Deny';
import Confirmation from '../../../assets/svgs/Confirmation';
import FavoriteNavigationInterface from '../../Interfaces/FavoriteNavigationInterface';
import getLoggedUser, { setAndChangeLoggedUser } from '../../utils/LoggedUser';
import { unFavoriteBakeryServices } from '../../services/FavoriteBakeryServices/FavoriteBakeryServices';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import NotFound from '../../../assets/svgs/NotFound';
import CookieLove from '../../../assets/svgs/CookieLove';

export default function FavoriteScreen() {
  const route = useRoute();
  const params: FavoriteNavigationInterface = route.params as FavoriteNavigationInterface;
  const [favoritesList, setFavoritesList] = React.useState<BakeryInterface[]>([])
  const [method, setMethod] = React.useState("")
  const [bakeryName, setBakeryName] = React.useState("")
  const navigation = useNavigation()
  const [loading, setLoading] = React.useState(false)

  useEffect(() => {
    setMethod(params.method ? params.method : "")
    setBakeryName(params.bakeryName ? params.bakeryName : "")
  }, [])

  let objUser: UserInterface = {};
  let user: any
  async function getUser() {
    user = await AsyncStorage.getItem('loggedUser');

    objUser = JSON.parse(user) as UserInterface;
  }

  async function unFavoriteBakery(bakeryId: String) {
    getUser();
    setLoading(true)
    await unFavoriteBakeryServices(bakeryId).then(response => {
      if (response.length > 0) {
        if (response[0].error === "" || response[0].error === undefined || response[0].error === null) {
          let newFavorites: Array<favorites> = []
          for (let i = 0; i < response.length; i++) {
            newFavorites.push({ _id: response[i]._id })
          }

          setLoading(false)
          objUser.favoritos = newFavorites;
          setAndChangeLoggedUser(objUser)
          setFavoritesList(response)
        }
      }
      else {
        setLoading(false)
        objUser.favoritos = [];
        setAndChangeLoggedUser(objUser)
        setFavoritesList([])
      }
    }).catch(error => {
      setLoading(false)
      console.log(error)
    });
  }

  useEffect(() => {
    async function populateFavoriteList() {
      setLoading(true)
      let user: UserInterface = await getLoggedUser();

      if (params.bakeries) {
        setLoading(false)
        setFavoritesList(params.bakeries)
      }
      else {
        const favoritos = user.favoritos;
        let ids: Array<string> = [];
        if (favoritos) {
          for (let i = 0; i < favoritos?.length; i++) {
            ids.push(favoritos[i]._id as string)
          }

          await getBakeriesByIdList(ids).then(response => {
            setLoading(false)
            setFavoritesList(response)
          })
        }
      }

    }

    populateFavoriteList();
  }, [])

  const iterate = favoritesList?.map(bakery => (
    <View key={bakery._id} style={styles.beNotifiedContainer}>
      <View style={styles.notificationIconContainer}>
        <Image style={styles.bakerImage} resizeMode="contain" source={require("../../../assets/images/bakerIconTransparent.png")} />
      </View>
      <View style={styles.notificationTextContainer}>
        <Text style={styles.notificationAlertText}>
          {bakery.nome}
        </Text>
        <Text style={{ fontFamily: "Poppins-Regular", color: "#808080", }}>
          {bakery.aberto_fechado ? "Fechado" : "Aberto"}
        </Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.controlButtonDelete} onPress={() => {
            unFavoriteBakery(bakery._id)
            setMethod("delete")
            setBakeryName(String(bakery.nome))
          }}>
            <Text style={[styles.controlButtonText, { color: "#ff6678" }]}>Excluir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButtonSee} onPress={() => { navigation.navigate("BottomTabNavigator", bakery) }}>
            <Text style={styles.controlButtonText}>Ver mais</Text>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="#FEC044" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ));

  function renderComponents(){
      if(loading){
        return (
        <ScrollView contentContainerStyle={{ alignItems: "center" }} bounces={true} style={styles.scrollView}>
        <View style={styles.beNotifiedContainer}>
          <View style={styles.notificationIconContainer}>
            <Image style={styles.bakerImage} resizeMode="contain" source={require("../../../assets/images/bakerIconTransparent.png")} />
          </View>
          <ShimmerPlaceHolder style={styles.loaderContainer} autoRun={true} visible={false} />
        </View>
        <View style={styles.beNotifiedContainer}>
          <View style={styles.notificationIconContainer}>
            <Image style={styles.bakerImage} resizeMode="contain" source={require("../../../assets/images/bakerIconTransparent.png")} />
          </View>
          <ShimmerPlaceHolder style={styles.loaderContainer} autoRun={true} visible={false} />
        </View>
      </ScrollView>)
      }
      else if((!loading && favoritesList?.length === 0)){
        return (
        <View style={styles.notFoundContainer}>
          <NotFound widthImage={250} heightImage={250} />
          <Text style={styles.notFoundText}>Você ainda não favoritou nenhuma padaria!</Text>
        </View>)
      }
      else if(!loading && params.bakeries && method === "add"){
        return (
          <ScrollView contentContainerStyle={{ alignItems: "center" }} bounces={true} style={styles.scrollView}>
            <View style={styles.addedDeletedBakeryView}>
              <View style={styles.addedDeletedIconContainer}>
                <Confirmation widthImage={120} heightImage={120} />
              </View>

              <View style={styles.addedDeletedTextContainer}>
                <Text style={styles.addedDeletedTitleText}>Padaria Adicionada!</Text>
                <Text style={styles.addedDeletedSubTitleText}>A padaria {bakeryName} foi adicionada à sua lista de favoritos!</Text>
              </View>
            </View>
            {iterate}
          </ScrollView>
        )
      }
      else if(!loading && params.bakeries && method === "delete"){
        return (
          <ScrollView contentContainerStyle={{ alignItems: "center" }} bounces={true} style={styles.scrollView}>
            <View style={styles.addedDeletedBakeryView}>
              <View style={styles.addedDeletedIconContainer}>
                <Deny widthImage={120} heightImage={120} />
              </View>

              <View style={styles.addedDeletedTextContainer}>
                <Text style={styles.addedDeletedTitleText}>Padaria Excluida!</Text>
                <Text style={styles.addedDeletedSubTitleText}>A padaria {bakeryName} foi excluida da sua lista de favoritos!</Text>
              </View>
            </View>
            {iterate}
          </ScrollView>
        )
      }
      else {
        return (
          <ScrollView contentContainerStyle={{ alignItems: "center" }} bounces={true} style={styles.scrollView}>
            {iterate}
          </ScrollView>
        )
      }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CookieLove widthImage={120} heightImage={120}/>
        <View style={styles.textHeader}>
          <Text style={{ fontFamily: "Poppins-Bold", color: "white", fontSize: 17 }}>Suas padarias favoritas</Text>
          <Text style={{ fontFamily: "Poppins-ExtraLight", color: "white", fontSize: 15 }}>As padarias que você mais gosta listadas em um lugar!</Text>
        </View>
      </View>

      <View style={styles.secondContainer}>
       {renderComponents()}
      </View>


    </View>
  );
}
