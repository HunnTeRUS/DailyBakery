import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles'

export default function TabOneScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>

        <View style={{flexDirection: "row", marginTop: "40%"}}>
          <Image style={styles.transparentBakerIcon} resizeMode="contain" source={require("../../assets/images/bakerIconTransparent.png")}/>
          
          <View style={{flexDirection: "column", alignSelf: "center"}}>
            <Text style={[styles.bakeryName, {color: "#FEC044"}]}>Padaria do Zezé</Text>
            <Text style={styles.bakeryName}>Estamos abertos!</Text>
          </View>          
        </View>

        <Text style={styles.title}><Text style={{color: "#FEC044", fontFamily: 'Poppins-Bold',}}>Clique no botão abaixo</Text> para ser notificado por esta padaria</Text>

        <TouchableOpacity onPress={() => {navigation.navigate("BeNotified")}} style={styles.beNotifiedButton}>
          <Image style={styles.notificationIcon} source={require("../../assets/images/notificationIcon.png")} />
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
                {"\n"}{"HOJE"}{"\n"}{"10/10/2020"}
              </Text>
            </View>
          </View>
        </View>
    </View>
  );
}
