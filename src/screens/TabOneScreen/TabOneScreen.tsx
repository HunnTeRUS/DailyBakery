import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BakeryInterface from '../../Interfaces/BakeryInterfaceDAO';
import styles from './styles'
import formatDateFromStringDate, {formatHourFromStringDate} from '../../utils/FormatDate'
import ModalPopupInfos from '../../components/ModalPopup/ModalPopupInfo/ModalPopupInfos';
import ModalPopupLoading from '../../components/ModalPopup/ModalPopupLoading/ModalPopupLoading';
import ModalPopupWarns from '../../components/ModalPopup/ModalPopupWarn/ModalPopupWarns'
import ModalPopupInterrogs from '../../components/ModalPopup/ModalPopupInterrog/ModalPopupInterrogs'
import { LinearGradient } from 'expo-linear-gradient';

export default function TabOneScreen({route}:any) {
  const navigation = useNavigation();
  const bakery = route.params.bakery as BakeryInterface;

  const [show, setShow] = React.useState(false);
  const [showWarn, setShowWarn] = React.useState(false);
  const [showLoading, setShowLoading] = React.useState(false)
  const [showAsk, setShowAsk] = React.useState(false)

  return (
    <View style={styles.container}>
      {!show ? <></> : <ModalPopupInfos onPressCloseButton={() => { navigation.navigate('BottomTabNavigator') }} 
      textToShow='Sua senha foi alterada com sucesso!' showModal={show} setShow={setShow} />}
      {!showWarn ? <></> : <ModalPopupWarns functionToButton={() => { }} textToShow={""} showModal={showWarn} setShow={setShowWarn} />}
      {!showLoading ? <></> : <ModalPopupLoading showModal={showLoading} />}
      {!showAsk ? <></> : <ModalPopupInterrogs functionToYesButton={() =>{navigation.navigate("BeNotified", {bakery: bakery})}} textToTitle='Ativar notificações'
        textToShow='Deseja ser notificado sobre esta padaria?' showModal={showAsk} setShow={setShowAsk}/>}
      
      <View style={styles.secondContainer}>
        <View style={{flexDirection: "row", marginTop: "40%"}}>
          <Image style={styles.transparentBakerIcon} resizeMode="contain" source={require("../../../assets/images/bakerIconTransparent.png")}/>
          
          <View style={{flexDirection: "column", alignSelf: "center"}}>
            <Text style={[styles.bakeryName, {color: "#FEC044"}]}>{bakery.nome}</Text>
            <Text style={styles.opened}>
              Estamos
              <Text style={{color: bakery.aberto_fechado ? "grey" : "grey", fontFamily: 'Poppins-Bold',}}>
                {bakery.aberto_fechado ? " fechados!" : " abertos!"}
              </Text>
            </Text>
          </View>          
        </View>

        <Text style={styles.title}><Text style={{color: "#FEC044", fontFamily: 'Poppins-Bold',}}>Clique no botão abaixo</Text> para ser notificado por esta padaria</Text>

        <TouchableOpacity onPress={() => {setShowAsk(true)}} style={styles.beNotifiedButton}>
          <LinearGradient
            colors={["#f46b45", "#eea849"]}
            start={{x: 0.1,y: 0}}
            end={{x: 0.6,y: 0}}
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: "100%",
                borderRadius: 10
            }}
          >
          
            <Image style={styles.notificationIcon} source={require("../../../assets/images/notificationIcon.png")} />
            <Text style={styles.beNotifiedText}>Ativar Notificação</Text>
          </LinearGradient>
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
