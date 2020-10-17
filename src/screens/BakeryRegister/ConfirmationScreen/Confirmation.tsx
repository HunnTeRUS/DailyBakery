import React from 'react';
import styles from './styles'
import { AsyncStorage, BackHandler, TouchableOpacity} from 'react-native'
import { Text, View } from '../../../components/Themed';
import Baker from '../../../../assets/svgs/Baker'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'

const Confirmation = () => {
    const navigation = useNavigation();

    useFocusEffect(
        React.useCallback(() => {
          const onBackPress = () => {
            return true;
          };
    
          BackHandler.addEventListener('hardwareBackPress', onBackPress);
    
          return () =>
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [])
      );
      
    return (
        <View style={styles.container}>
            <View style={styles.secondContainer}>
                <Baker />
                <Text style={styles.title}>Cadastro criado com sucesso!</Text>
                <Text style={styles.subTitle}>Seu cadastro foi criado com sucesso. Clique no botão abaixo para acessar o app!</Text>
                <TouchableOpacity style={styles.nextButton} onPress={() => {navigation.navigate("MapScreen")}}>
                    <Text style={styles.nextText}>Iniciar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Confirmation;