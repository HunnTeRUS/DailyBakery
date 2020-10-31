import React from 'react';
import styles from './styles'
import { AsyncStorage, BackHandler, TouchableOpacity } from 'react-native'
import { Text, View } from '../../../components/Themed';
import Baker from '../../../../assets/svgs/Baker'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'
import UserInterface from '../../../Interfaces/UserInterface'
import doLoginServices from '../../../services/LoginServices/LoginService';

import { removeLoggedUser, setAndChangeLoggedUser } from '../../../utils/LoggedUser';
import verifyToken from '../../../services/VerifyTokenServices/VerifyTokenService';
const Confirmation = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as UserInterface

  const isValid = async () => {
    await verifyToken().then(response => {

      if (response.error === "" || response.error === undefined || response.error === null) {
        if (response.email !== "" && response.email !== undefined && response.email !== null) {
          setAndChangeLoggedUser(response);
          navigation.navigate('WalkthroughTutorial')
        }
        else {
          removeLoggedUser('loggedUser')
          return;
        }
      }
      else {
        removeLoggedUser('loggedUser')
        return;
      }
    }).catch(error => {
      console.log(error)
      removeLoggedUser('loggedUser')
      return;
    });
  }

  async function pressButton() {
    await doLoginServices(params?.email as string, params?.senha as string).then(Response => {
      if (Response.error === "" || Response.error === undefined || Response.error === null) {
        setAndChangeLoggedUser(Response)
        isValid();
      }
    })
  }
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
        <TouchableOpacity style={styles.nextButton} onPress={() => pressButton()}>
          <Text style={styles.nextText}>Iniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


export default Confirmation;