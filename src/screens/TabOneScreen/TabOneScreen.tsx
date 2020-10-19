import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BakeryInterface from '../../Interfaces/BakeryInterfaceDAO';
import styles from './styles'
import formatDateFromStringDate, { formatHourFromStringDate } from '../../utils/FormatDate'
import ModalPopupInfos from '../../components/ModalPopup/ModalPopupInfo/ModalPopupInfos';
import ModalPopupLoading from '../../components/ModalPopup/ModalPopupLoading/ModalPopupLoading';
import ModalPopupWarns from '../../components/ModalPopup/ModalPopupWarn/ModalPopupWarns'
import ModalPopupInterrogs from '../../components/ModalPopup/ModalPopupInterrog/ModalPopupInterrogs'
import Cook from '../../../assets/svgs/Cook'
import Clock from '../../../assets/svgs/Clock'
import NotificationPhone from '../../../assets/svgs/NotificationPhone'
import Closed from '../../../assets/svgs/Closed'
import Confirmation from '../../../assets/svgs/Confirmation'

export default function TabOneScreen({ route }: any) {
  const navigation = useNavigation();
  const bakery = route.params.bakery as BakeryInterface;

  const [show, setShow] = React.useState(false);
  const [showWarn, setShowWarn] = React.useState(false);
  const [showLoading, setShowLoading] = React.useState(false)
  const [showAsk, setShowAsk] = React.useState(false)
  //ff6678

  return (
    <View style={styles.container}>
      {!show ? <></> : <ModalPopupInfos onPressCloseButton={() => { navigation.navigate('BottomTabNavigator') }}
        textToShow='Sua senha foi alterada com sucesso!' showModal={show} setShow={setShow} />}
      {!showWarn ? <></> : <ModalPopupWarns functionToButton={() => { }} textToShow={""} showModal={showWarn} setShow={setShowWarn} />}
      {!showLoading ? <></> : <ModalPopupLoading showModal={showLoading} />}
      {!showAsk ? <></> : <ModalPopupInterrogs functionToYesButton={() => { navigation.navigate("BeNotified", { bakery: bakery }) }} textToTitle='Ativar notificações'
        textToShow='Deseja ser notificado sobre esta padaria?' showModal={showAsk} setShow={setShowAsk} />}

      <View style={styles.cookImage}>
        <Cook widthImage={300} />
        <Text style={{
          fontFamily: "Poppins-Bold", color: "white", alignSelf: 'center',
          marginTop: "5%", fontSize: 17
        }}>Padaria Exemplo</Text>
      </View>

      <View style={styles.secondContainer}>
        <View style={styles.beNotifiedContainer}>
            <View style={[styles.notificationIconContainer, {backgroundColor: "#F6F6F6"}]}>
              {bakery.aberto_fechado ? <Closed widthImage={80} heightImage={80}/> :<Confirmation widthImage={100} heightImage={100}/> }
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

        <TouchableOpacity onPress={() => {navigation.navigate("BeNotified", {bakery: bakery})}} style={styles.beNotifiedContainer}>
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

        <View style={styles.fornadaContainer}>
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

      </View>


    </View>
  );
}
