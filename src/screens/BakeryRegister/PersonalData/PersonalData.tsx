import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import TextInput from '../../../components/TextInput';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import ModalPopupInfos from '../../../components/ModalPopup/ModalPopupInfo/ModalPopupInfos';
import ModalPopupLoading from '../../../components/ModalPopup/ModalPopupLoading/ModalPopupLoading';
import FindPhoneService from '../../../services/ReisterServices/FindPhoneService'
import { celPhoneMask } from '../../../components/InputMasks';

const PersonalData = () => {
    const [typedName, setTypedName] = useState('')
    const [typedCellPhone, setTypedCellPhone] = useState('')
    const navigation = useNavigation();
    const [show, setShow] = useState(false);
    const [textToShow, setTextToShow] = useState("");
    const [showLoading, setShowLoading] = useState(false);

    const phoneValidator = (phone: string) => phone.length === 15;
    const nameValidator = (name: string) => name.length > 3;

    async function pressButton() {
        setShowLoading(true)

        await FindPhoneService(typedCellPhone).then(response => {
            setShowLoading(false);
            if (response.error === "" || response.error === undefined || response.error === null) {
                navigation.navigate("AccesData", { nome: typedName, numero_celular: typedCellPhone });
            } else {
                setShow(true);
                setTextToShow(response.error as string)
            }
        }).catch(error => {
            setShowLoading(false)
            setShow(true)
            setTextToShow("Ocorreu um erro, por favor, tente novamente mais tarde!");
        })
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior="position">
                <View style={styles.secondContainer}>
                    {!show ? <></> : <ModalPopupInfos textToShow={textToShow} showModal={show} setShow={setShow} onPressCloseButton={() => { navigation.navigate("PersonalData") }} />}
                    {!showLoading ? <></> : <ModalPopupLoading showModal={showLoading} />}
                    <View style={styles.firstContainer}>
                        <Text style={styles.title}>Seja bem vindo ao nosso app!</Text>
                        <Text style={styles.subTitle}>Para começar seu cadastro, informe seu nome e seu numero de celular.</Text>
                        <Text style={styles.text}>Nome</Text>
                        <TextInput icon="user" validator={text => {
                            setTypedName(text);
                            return nameValidator(text)
                        }} value={typedName} placeholder="Digite o seu nome completo" />

                        <Text style={styles.textPhone}>Numero de celular</Text>
                        <TextInput icon="phone" keyboardType="number-pad" validator={text => {
                            setTypedCellPhone(celPhoneMask(text));
                            return phoneValidator(text)
                        }} value={typedCellPhone} placeholder="Digite o seu número de celular" />
                        <Text style={[styles.subTitle, { marginTop: '5%' }]}>
                            Seu numero de celular será usado apenas para envio da notificação, você poderá atualizar sempre que precisar.</Text>
                    </View>
                    <View style={styles.thirdContainer}>
                        <TouchableOpacity style={styles.nextButton}
                            containerStyle={{
                                opacity: (phoneValidator(typedCellPhone) && nameValidator(typedName)) ? 1 : .4,
                            }}
                            disabled={!(phoneValidator(typedCellPhone) && nameValidator(typedName))} onPress={() => pressButton()}>
                            <Text style={styles.nextText}>Próximo</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

export default PersonalData;