import { useNavigation, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles'
import BeNotifiedIcon from '../../../assets/svgs/BeNotified'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import BakeryInterface from '../../Interfaces/BakeryInterfaceDAO';
import formatDateFromStringDate, { formatHourFromStringDate } from '../../utils/FormatDate';
import NotificationPhone from '../../../assets/svgs/NotificationPhone';
import NotificationPhoneReady from '../../../assets/svgs/NotificationPhoneReady';

export default function BeNotified() {
  // const navigation = useNavigation();
  // const route = useRoute();
  // const bakery: BakeryInterface = route.params as BakeryInterface

  return (
    <View style={styles.container}>
      <View style={styles.benotifiedIcon}>
        <NotificationPhoneReady widthImage={300} />
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Notificações ativadas!</Text>
          <Text style={styles.subTitle}>Você será notificado por esta padaria na proxima fornada que sair. Se não quiser mais ser notificado, basta clicar no botão abaixo!</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
            }}
            style={styles.nextButton}>
            <Text style={styles.nextText}>Desativar notificação</Text>
            <MaterialIcons name="notifications" color="#f46b45" style={{paddingLeft: 5}} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
