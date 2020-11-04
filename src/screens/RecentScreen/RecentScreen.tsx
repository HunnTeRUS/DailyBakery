import * as React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import styles from './styles'
import { MaterialIcons } from '@expo/vector-icons';
import Calendar from '../../../assets/svgs/Calendar';
import {getRecentBakeries} from '../../services/RecentsServices/RecentBakeriesServices'
import BakeryInterface from '../../Interfaces/BakeryInterfaceDAO';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import NotFound from '../../../assets/svgs/NotFound';

export default function RecentScreen() {

  const [bakeries, setBakeries] = React.useState<BakeryInterface[]>([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    async function setRecentBakeries(){
        setLoading(true)
        await getRecentBakeries().then(response => {
            setLoading(false)
            setBakeries(response)
        })
    }

    setRecentBakeries();
  }, [])

  function renderComponents(){
    if(loading) {
      return (
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
        </ScrollView>
      )
    }
    else if((!loading && bakeries.length === 0)) {
        return (<View style={styles.notFoundContainer}>
          <NotFound widthImage={250} heightImage={250} />
          <Text style={styles.notFoundText}>Você ainda não pediu para ser notificado por nenhuma padaria!</Text>
        </View>)
    }

    else {
      return (
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
                    <TouchableOpacity style={styles.controlButtonSee} onPress={() => {}}>
                      <Text style={styles.controlButtonText}>Ver mais</Text>
                      <MaterialIcons name="keyboard-arrow-right" size={20} color="#FEC044" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
          ))}
        </ScrollView>
      )
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Calendar widthImage={120} heightImage={120}/>
        <View style={styles.textHeader}>
          <Text style={{ fontFamily: "Poppins-Bold", color: "white", fontSize: 17 }}>Padarias recentes</Text>
          <Text style={{ fontFamily: "Poppins-ExtraLight", color: "white", fontSize: 15 }}>Padarias que você pediu para ser notificado recentemente</Text>
        </View>
      </View>

      <View style={styles.secondContainer}>
        {renderComponents()}
      </View>

    </View>
  );
}
