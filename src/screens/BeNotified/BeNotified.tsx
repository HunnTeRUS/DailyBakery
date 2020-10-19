import { useNavigation, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'
import BeNotifiedIcon from '../../../assets/svgs/BeNotified'
import { FontAwesome5 } from '@expo/vector-icons';
import BakeryInterface from '../../Interfaces/BakeryInterfaceDAO';
import formatDateFromStringDate, { formatHourFromStringDate } from '../../utils/FormatDate';

export default function BeNotified() {
  const navigation = useNavigation();
  const route = useRoute();
  const bakery: BakeryInterface = route.params?.bakery as BakeryInterface

  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <View style={styles.benotifiedIcon}>
          <Text style={styles.title}>Você será notificado por esta padaria na proxima fornada que sair!</Text>
          <BeNotifiedIcon widthImage={300} />
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
                  {"\n"}
                  {formatDateFromStringDate(String(bakery.ultima_fornada ? bakery.ultima_fornada : "" ))}
                  {"\n"}
                  {formatHourFromStringDate(String(bakery.ultima_fornada ? bakery.ultima_fornada : ""))}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
