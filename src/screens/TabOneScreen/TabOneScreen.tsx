import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BakeryInterface from '../../Interfaces/BakeryInterfaceDAO';
import styles from './styles'
import formatDateFromStringDate, {formatHourFromStringDate} from '../../utils/FormatDate'

export default function TabOneScreen({route}:any) {
  const navigation = useNavigation();

  const bakery = route.params.bakery as BakeryInterface;

  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>

        <View style={{flexDirection: "row", marginTop: "40%"}}>
          <Image style={styles.transparentBakerIcon} resizeMode="contain" source={require("../../../assets/images/bakerIconTransparent.png")}/>
          
          <View style={{flexDirection: "column", alignSelf: "center"}}>
            <Text style={[styles.bakeryName, {color: "#FEC044"}]}>{bakery.nome}</Text>
            <Text style={styles.opened}>
              Estamos
              <Text style={{color: bakery.aberto_fechado ? "red" : "green", fontFamily: 'Poppins-Bold',}}>
                {bakery.aberto_fechado ? " fechados!" : " abertos!"}
              </Text>
            </Text>
          </View>          
        </View>

        <Text style={styles.title}><Text style={{color: "#FEC044", fontFamily: 'Poppins-Bold',}}>Clique no botão abaixo</Text> para ser notificado por esta padaria</Text>

        <TouchableOpacity onPress={() => {navigation.navigate("BeNotified")}} style={styles.beNotifiedButton}>
          <Image style={styles.notificationIcon} source={require("../../../assets/images/notificationIcon.png")} />
          <Text style={styles.beNotifiedText}>Ativar Notificação</Text>
        </TouchableOpacity>

        <Text style={styles.subTitle} >Você será notificado da proxima vez que sair pão quentinho nesta padaria!</Text>

      </View>
      <View style={styles.thirdContainer}>
          <View style={styles.viewOfFornadasAux}>
            <View style={styles.viewOfFornadas}>
              <FontAwesome5 style={styles.clockIcon} name="clock" size={35} />
              <Text style={styles.ultimaFornadaText}>
                <Text
                  style={styles.ultimaFornadaTextLabel}>
                  Ultima fornada:
                      </Text>
                  {"\n"}{formatDateFromStringDate(String(bakery.ultima_fornada ? bakery.ultima_fornada : "" ))}{"\n"}{formatHourFromStringDate(String(bakery.ultima_fornada ? bakery.ultima_fornada : ""))}
              </Text>
            </View>
          </View>
        </View>
    </View>
  );
}