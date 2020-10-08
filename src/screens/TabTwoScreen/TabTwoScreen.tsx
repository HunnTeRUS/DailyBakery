import { FontAwesome5, Feather } from '@expo/vector-icons';
import * as React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import BakeryInterface from '../../Interfaces/BakeryInterfaceDAO';
import {telphoneMask} from '../../utils/Masks'
import ufToStateName from '../../utils/UFToFullStateName'

export default function TabTwoScreen({route}:any) {
  const bakery = route.params.bakery as BakeryInterface;

  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>

        <View style={{ marginTop: "5%"}}>
            <Text style={styles.title}>Entre em contato conosco!</Text>
            <Image style={styles.contactImage} source={require('../../../assets/images/contact.png')}/>     
        </View> 

        
        <View style={styles.locationContainer}>
          <View style={styles.locationTitleContainer}>
            <Feather name="map" size={40} color={"#FEC044"}/>
            <Text style={styles.contactTitle}>Endereço</Text>
          </View>

          <Text style={styles.streetName}><Text style={{fontFamily: 'Poppins-Bold'}}>Rua:</Text> {bakery.rua}</Text>
          <View style={styles.locationInfoContainer}>
              <View style={styles.locationInfoContainerAux1}>
                <View style={styles.subContainer1}>
                  <Text style={{fontFamily: 'Poppins-Regular'}}><Text style={{fontFamily: 'Poppins-Bold', fontSize: 15, color: '#4A4040',}}>Bairro:</Text> {bakery.bairro}</Text>
                </View>
                <View style={styles.subContainer1}>
                  <Text style={{fontFamily: 'Poppins-Regular'}}><Text style={{fontFamily: 'Poppins-Bold', fontSize: 15, color: '#4A4040',}}>Cidade:</Text> {bakery.cidade}</Text>
                </View>
              </View>
              <View style={styles.locationInfoContainerAux2}>
                <View style={styles.subContainer1}>
                  <Text style={{fontFamily: 'Poppins-Regular'}}><Text style={{fontFamily: 'Poppins-Bold', fontSize: 15, color: '#4A4040',}}>Numero:</Text> {bakery.numero}</Text>
                </View>
                <View style={styles.subContainer1}>
                  <Text style={{fontFamily: 'Poppins-Regular'}}>
                    <Text style={{fontFamily: 'Poppins-Bold', fontSize: 15, color: '#4A4040'}}>Estado: </Text>{bakery.estado ? ufToStateName(bakery.estado) : ""}</Text>
                </View>
              </View>
          </View>
        </View>

        <View style={styles.contactContainer}>
          <View style={styles.locationTitleContainer}>
            <Feather name="hash" size={40} color={"#FEC044"}/>
            <Text style={styles.contactTitle}>Contato</Text>
          </View>

          <View style={styles.numbersContainer}>
            <View style={styles.telContainer}>
              <Text style={{fontFamily: 'Poppins-Regular', color: '#4A4040'}}>
                <Text style={{fontFamily: 'Poppins-Bold', fontSize: 15, color: '#4A4040',}}>Telefone:</Text> {bakery.numero_telefone ? telphoneMask(bakery.numero_telefone) : ""}</Text>
            </View>
            <TouchableOpacity style={styles.beNotifiedButton}>
              <FontAwesome5 name="whatsapp" size={15} color="white"/>
              <Text style={styles.beNotifiedText}>Whatsapp</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        </View>
    </View>
  );
}
