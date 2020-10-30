import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles'
import { MaterialIcons } from '@expo/vector-icons';
import BakeryInterface from '../../Interfaces/BakeryInterfaceDAO';
import FavoritesInterface, { favorites } from '../../Interfaces/FavoritesInterface';
import getLoggedUser from '../../utils/LoggedUser';
import NotFound from '../../../assets/svgs/NotFound';
import { useEffect } from 'react';

export default function FavoriteScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const bakeries: FavoritesInterface = route.params as FavoritesInterface
  const [favoritesList, setFavoritesList] = React.useState<favorites[]>()

  useEffect(() => {
    async function populateFavoriteList() {
      const loggedUser = await getLoggedUser();
      console.log(loggedUser)

      bakeries ? setFavoritesList(bakeries.favoritos) : setFavoritesList(loggedUser.favoritos)
    }

    populateFavoriteList();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontFamily: "Poppins-Bold", color: "white", fontSize: 17 }}>Padarias Favoritas</Text>
        <MaterialIcons name="star" size={30} color="#FEC044" style={styles.starIcon} />
      </View>

      <View style={styles.secondContainer}>
        {favoritesList?.length === 0 ?
          <View style={styles.notFoundContainer}>
            <NotFound widthImage={250} heightImage={250} />
            <Text style={styles.notFoundText}>Nenhum resultado encontrado!</Text>
          </View>
          :
          <ScrollView contentContainerStyle={{ alignItems: "center" }} bounces={true} style={styles.scrollView}>
            {favoritesList?.map(bakery => (
              <TouchableOpacity onPress={() => { }} style={styles.beNotifiedContainer}>
                <View style={styles.notificationIconContainer}>
                  <Image style={styles.bakerImage} resizeMode="contain" source={require("../../../assets/images/bakerIconTransparent.png")} />
                </View>
                <View style={styles.notificationTextContainer}>
                  <Text style={styles.notificationAlertText}>
                    TESTE
                </Text>
                  <Text style={styles.notificationInfoText}>
                    Clique aqui para ver mais informações!
                            </Text>
                  <MaterialIcons name="keyboard-arrow-right" size={25} style={styles.arrow} />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        }
      </View>


    </View>
  );
}
