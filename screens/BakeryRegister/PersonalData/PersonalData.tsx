import React, { useState } from 'react';
import { View, Text } from 'react-native';
import TextInput from '../../../components/TextInput';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import ModalPopupInfos from '../../../components/ModalPopup/ModalPopupInfo/ModalPopupInfos';
import ModalPopupLoading from '../../../components/ModalPopup/ModalPopupLoading/ModalPopupLoading';

const PersonalData = () => {
    const [typedCnpj, setTypedcnpj] = useState('')
    const navigation = useNavigation();
    const [show, setShow] = useState(false);
    const [textToShow, setTextToShow] = useState("");
    const [showLoading, setShowLoading] = useState(false);
    
    return (
        <View style={styles.container}>
                <View style={styles.secondContainer}>
                    {!show ? <></> : <ModalPopupInfos textToShow={textToShow} showModal={show} setShow={setShow} onPressCloseButton={() => { navigation.navigate("CNPJScreen") }} />}
                    {!showLoading ? <></> : <ModalPopupLoading showModal={showLoading} />}
                    <View style={styles.firstContainer}>
                        <Text style={styles.title}>Seja bem vindo ao nosso app!</Text>
                        <Text style={styles.subTitle}>Para começar seu cadastro, informe seu nome e seu numero de celular.</Text>
                        <Text style={styles.text}>Nome</Text>
                        <TextInput icon="user" validator={text => {
                             setTypedcnpj(text); 
                             return (text.length === 18)
                        }} value={typedCnpj} placeholder="Digite o seu nome completo" />

                        <Text style={styles.textPhone}>Numero de celular</Text>
                        <TextInput icon="phone" validator={text => {
                             setTypedcnpj(text); 
                             return (text.length === 18)
                        }} value={typedCnpj} placeholder="Digite o seu numero de celular" />
                        <Text style={[styles.subTitle, { marginTop: '5%' }]}>
                             Seu numero de celular será usado apenas para envio da notificação, você poderá atualizar sempre que precisar.</Text>                             
                    </View>
                    <View style={styles.thirdContainer}>
                        <TouchableOpacity style={styles.nextButton}
                            disabled={false} onPress={() => {navigation.navigate("AccesData")}}>
                            <Text style={styles.nextText}>Próximo</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    );
}

export default PersonalData;