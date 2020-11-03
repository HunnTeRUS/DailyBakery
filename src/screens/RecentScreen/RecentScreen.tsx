import * as React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import styles from './styles'
import { MaterialIcons } from '@expo/vector-icons';
import Calendar from '../../../assets/svgs/Calendar';
import {getRecentBakeries} from '../../services/RecentsServices/RecentBakeriesServices'
import BakeryInterface from '../../Interfaces/BakeryInterfaceDAO';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

export default function RecentScreen() {

  const [bakeries, setBakeries] = React.useState<BakeryInterface[]>([])

  React.useEffect(() => {
    async function setRecentBakeries(){
        var bakeryList = await getRecentBakeries()
        setBakeries(bakeryList as BakeryInterface[]);
    }

    setRecentBakeries();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Calendar widthImage={120} heightImage={120}/>
        <View style={styles.textHeader}>
          <Text style={{ fontFamily: "Poppins-Bold", color: "white", fontSize: 17 }}>Suas Padarias Favoritas</Text>
          <Text style={{ fontFamily: "Poppins-ExtraLight", color: "white", fontSize: 15 }}>Padarias que você pediu para ser notificado recentemente</Text>
        </View>
      </View>

      <View style={styles.secondContainer}>
      {bakeries.length === 0 ?
          <ScrollView contentContainerStyle={{ alignItems: "center" }} bounces={true} style={styles.scrollView}>
            <View style={styles.beNotifiedContainer}>
              <View style={styles.notificationIconContainer}>
                <Image style={styles.bakerImage} resizeMode="contain" source={require("../../../assets/images/bakerIconTransparent.png")} />
              </View>
              <ShimmerPlaceHolder style={styles.loaderContainer} autoRun={true} visible={false}/>
            </View>
            <View style={styles.beNotifiedContainer}>
              <View style={styles.notificationIconContainer}>
                <Image style={styles.bakerImage} resizeMode="contain" source={require("../../../assets/images/bakerIconTransparent.png")} />
              </View>
              <ShimmerPlaceHolder style={styles.loaderContainer} autoRun={true} visible={false}/>
            </View>
            <View style={styles.beNotifiedContainer}>
              <View style={styles.notificationIconContainer}>
                <Image style={styles.bakerImage} resizeMode="contain" source={require("../../../assets/images/bakerIconTransparent.png")} />
              </View>
              <ShimmerPlaceHolder style={styles.loaderContainer} autoRun={true} visible={false}/>
            </View>
          </ScrollView>
          :
          <ScrollView contentContainerStyle={{ alignItems: "center" }} bounces={true} style={styles.scrollView}>
            {bakeries.map(bakery => (
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

                      }}>
                        <Text style={[styles.controlButtonText, { color: "#ff6678" }]}>Excluir</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.controlButtonSee} onPress={() => {}}>
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
