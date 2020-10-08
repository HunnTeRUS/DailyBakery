import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'
import BeNotifiedIcon from '../../../assets/svgs/BeNotified'
import { FontAwesome5 } from '@expo/vector-icons';

export default function BeNotified() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <View style={styles.benotifiedIcon}>
          <Text style={styles.title}>Você será notificado por esta padaria na proxima fornada que sair!</Text>
          <BeNotifiedIcon widthImage={300} />
        </View>

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
