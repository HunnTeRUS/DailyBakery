import { useRoute } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import styles from './styles'
import { MaterialIcons } from '@expo/vector-icons';
import BakeryInterface from '../../Interfaces/BakeryInterfaceDAO';
import NotFound from '../../../assets/svgs/NotFound';
import { useEffect } from 'react';
import getBakeriesByIdList from '../../services/BakeryServices/BakeryServices'
import UserInterface from '../../Interfaces/UserInterface';
import Closed from '../../../assets/svgs/Closed';
import Deny from '../../../assets/svgs/Deny';
import Confirmation from '../../../assets/svgs/Confirmation';
import FavoriteNavigationInterface from '../../Interfaces/FavoriteNavigationInterface';
import getLoggedUser from '../../utils/LoggedUser';

export default function FavoriteScreen() {
  const route = useRoute();
  const params: FavoriteNavigationInterface = route.params as FavoriteNavigationInterface;
  const [favoritesList, setFavoritesList] = React.useState<BakeryInterface[]>([])

  function renderAlertMessage() {
    if (params.bakeries && params.method === "add")
      return (
        <View style={styles.addedDeletedBakeryView}>
          <View style={styles.addedDeletedIconContainer}>
            <Confirmation widthImage={120} heightImage={120} />
          </View>

          <View style={styles.addedDeletedTextContainer}>
            <Text style={styles.addedDeletedTitleText}>Padaria Adicionada!</Text>
            <Text style={styles.addedDeletedSubTitleText}>A padaria {params.bakeryName} foi adicionada à sua lista de favoritos!</Text>
          </View>
        </View>);

    else if (params.bakeries && params.method === "delete")
      return (
      <View style={styles.addedDeletedBakeryView}>
        <View style={styles.addedDeletedIconContainer}>
          <Deny widthImage={120} heightImage={120} />
        </View>

        <View style={styles.addedDeletedTextContainer}>
          <Text style={styles.addedDeletedTitleText}>Padaria Excluida!</Text>
          <Text style={styles.addedDeletedSubTitleText}>A padaria {params.bakeryName} foi excluida da sua lista de favoritos!</Text>
        </View>
      </View>)

    else return (<></>);
  }

  useEffect(() => {
    async function populateFavoriteList() {
      let user : UserInterface = await getLoggedUser();

      if (params.bakeries)
        setFavoritesList(params.bakeries)
      else {
        const favoritos = user.favoritos;
        let ids: Array<String> = [];
        if (favoritos) {
          for (let i = 0; i < favoritos?.length; i++) {
            ids.push(favoritos[i]._id)
          }

          await getBakeriesByIdList(ids).then(response => {
            setFavoritesList(response)
          })
        }
      }
    
    }

    populateFavoriteList();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontFamily: "Poppins-Bold", color: "white", fontSize: 17 }}>Suas Padarias Favoritas</Text>
      </View>

      <View style={styles.secondContainer}>
        {favoritesList?.length === 0 ?
          <View style={styles.notFoundContainer}>
            <NotFound widthImage={250} heightImage={250} />
            <Text style={styles.notFoundText}>Nenhum resultado encontrado!</Text>
          </View>
          :
          <ScrollView contentContainerStyle={{ alignItems: "center" }} bounces={true} style={styles.scrollView}>
            {renderAlertMessage()}
            {favoritesList?.map(bakery => (
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
                    <TouchableOpacity style={styles.controlButtonDelete}>
                      <Text style={[styles.controlButtonText, { color: "#ff6678" }]}>Excluir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.controlButtonSee}>
                      <Text style={styles.controlButtonText}>Ver mais</Text>
                      <MaterialIcons name="keyboard-arrow-right" size={20} color="#FEC044" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        }
      </View>


    </View>
  );
}
