import { FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons';
import * as React from 'react';
import { Image, View, Text, Linking } from 'react-native';
import styles from './styles'
import BakeryInterface from '../../Interfaces/BakeryInterfaceDAO';
import Contact from '../../../assets/svgs/Contact'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function TabTwoScreen({route}:any) {
  const bakery = route.params.bakery as BakeryInterface;
  const whatsAppMessage = "Gostaria de informações a respeito da sua padaria, poderia me ajudar, por favor?"

  async function sendWhatsApp(phoneNumber: Number){
      Linking.openURL(`whatsapp://send?phone=${phoneNumber}&text=${whatsAppMessage}`)
  }

  async function callBakery(phoneNumber: Number){
      Linking.openURL(`tel:${phoneNumber}`)
  }

  return (
    <View style={styles.container}>

      <View style={styles.cookImage}>
        <Contact widthImage={300} />
        <Text style={{
          fontFamily: "Poppins-Bold", color: "white", alignSelf: 'center',
          marginTop: "5%", fontSize: 17
        }}>Contato</Text>
      </View>

      <View style={styles.secondContainer}>
        <View style={[styles.beNotifiedContainer, {height: "40%",}]}>
            <View style={styles.notificationTextContainer}>
              <Text style={[styles.notificationAlertText]}>
                Endereço:
              </Text>
              <Text style={[styles.notificationAlertText, {fontFamily: "Poppins-Regular",marginTop: "0.5%",}]}>
                Rua: <Text style={[styles.notificationAlertText, {fontFamily: "Poppins-ExtraLight",marginTop: "0.5%",}]}>{bakery.rua}</Text>
              </Text>
              <Text style={[styles.notificationAlertText, {fontFamily: "Poppins-Regular",marginTop: "0.5%",}]}>
                Cidade: <Text style={[styles.notificationAlertText, {fontFamily: "Poppins-ExtraLight",marginTop: "0.5%",}]}>{bakery.cidade}</Text>
              </Text>
              <Text style={[styles.notificationAlertText, {fontFamily: "Poppins-Regular",marginTop: "0.5%",}]}>
                Estado: <Text style={[styles.notificationAlertText, {fontFamily: "Poppins-ExtraLight",marginTop: "0.5%",}]}>{bakery.estado}</Text>
              </Text>
              <Text style={[styles.notificationAlertText, {fontFamily: "Poppins-Regular",marginTop: "0.5%",}]}>
                CEP: <Text style={[styles.notificationAlertText, {fontFamily: "Poppins-ExtraLight",marginTop: "0.5%",}]}>{bakery.cep}</Text>
              </Text>
              <Text style={[styles.notificationAlertText, {fontFamily: "Poppins-Regular",marginTop: "0.5%",}]}>
                Número: <Text style={[styles.notificationAlertText, {fontFamily: "Poppins-ExtraLight",marginTop: "0.5%",}]}>{bakery.numero}</Text>
              </Text>
            </View>
          </View>

        <TouchableOpacity onPress={() => {
          sendWhatsApp(Number(bakery.numero_telefone))
        }} style={[styles.beNotifiedContainer, {height: 85,}]}>
          <View style={[styles.notificationIconContainer, {backgroundColor: "#075e54"}]}>
             <FontAwesome5 name="whatsapp" size={60} color="white"/>
          </View>
          <View style={styles.notificationTextContainer}>
            <Text style={styles.notificationAlertText}>
              Abrir WhatsApp
              </Text>
            <Text style={styles.notificationInfoText}>
              Tirar duvidas com esta padaria pelo whatsapp!
              </Text>
            <MaterialIcons name="keyboard-arrow-right" size={25} style={styles.arrow} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          disabled={bakery.numero_telefone ? false : true}
          style={[styles.fornadaContainer, {height: 85,}]}
          containerStyle={{
            opacity: bakery.numero_telefone ? 1 : .4,
          }}
          onPress={() => {
            callBakery(Number(bakery.numero_telefone))
          }}
          >
          <View style={[styles.fornadaIconContainer, {backgroundColor: "#424242"}]}>
            <MaterialIcons name="local-phone" size={60} color="white"/>
          </View>
          <View style={styles.notificationTextContainer}>
            <Text style={styles.notificationAlertText}>
              Ligar para o estabelecimento
              </Text>
            <Text style={styles.notificationInfoText}>
              {bakery.numero_telefone ? "Clique aqui para ligar para esta padaria" : "Esta padaria não tem número de telefone"}
            </Text>
            <MaterialIcons name="keyboard-arrow-right" size={25} style={styles.arrow} />
          </View>
        </TouchableOpacity>

      </View>


    </View>
  );
}
