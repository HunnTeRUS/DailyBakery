import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Image, Text } from 'react-native';
import TextInput from '../../../components/TextInput';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import RegisterInterface from '../../../Interfaces/RegisterInterface';
import ModalPopupLoading from '../../../components/ModalPopup/ModalPopupLoading/ModalPopupLoading'
import ModalPopupWarns from '../../../components/ModalPopup/ModalPopupWarn/ModalPopupWarns'
import ModalPopupInput from '../ModalPopupInput/ModalPopupInput'
import emailConfirmationService from '../../../services/ReisterServices/EmailConfirmationService';

const AcessData = () => {
    const route = useRoute();
    const params = route.params as RegisterInterface
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmationPassword, setConfirmationPassword] = useState('')
    const [codeReceivedFromApi, setCodeReceivedFromApi] = useState('')
    const [textToShowError, setTextToShowError] = useState('Código inválido, tente novamente')
    const [show, setShow] = useState(false);
    const [showWarn, setShowWarn] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    const emailValidator = (email: string): boolean =>
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

    const passwordValidator = (field: string): boolean => field.length >= 6;

    const passwordConfirmationValidator = (field: string): boolean => {
        return field.length >= 6 && password === field
    }

    const submitButtonValidator = (): boolean => {
        return (password.length >= 6 && confirmationPassword.length >= 6 && password === confirmationPassword && emailValidator(email)) ? true : false
    }

    async function pressButton() {
        setShowLoading(true)
        await emailConfirmationService(email).then(response => {
            if (response.error === "" || response.error === undefined || response.error === null) {
                setCodeReceivedFromApi(response.codigoEnviado ? response.codigoEnviado as string : "")
                setShowLoading(false)
                setShow(true)
                return;
            }
        })
    }
    return (
        <View style={styles.container}>
            {!show ? <></> :
                <ModalPopupInput
                    emailReceivedFromAPI={email}
                    nameReceivedFromAPI={params.nome as string}
                    phoneNumber={params.numero_celular as string}
                    password={password}
                    codeReceivedFromAPI={codeReceivedFromApi}
                    textToShow='Digite o codigo que foi enviado em seu email'
                    showModal={show}
                    setShow={setShow} />}

            {!showWarn ? <></> : <ModalPopupWarns textToShow={textToShowError} showModal={showWarn} setShow={setShowWarn} />}
            {!showLoading ? <></> : <ModalPopupLoading showModal={showLoading} />}
            <KeyboardAvoidingView behavior="position">

                <View style={styles.secondContainer}>
                    <Text style={styles.title}>Dados para acesso ao app</Text>
                    <Text style={styles.subTitle}>Informe seu melhor email e crie uma senha segura para você</Text>
                    <Text style={styles.text}>E-mail</Text>
                    <TextInput icon="mail" validator={text => { setEmail(text); return emailValidator(text); }} value={email} placeholder="Digite seu melhor email" />
                    <Text style={styles.text}>Senha</Text>
                    <TextInput icon="key" validator={text => { setPassword(text); return passwordValidator(text); }} value={password} secureTextEntry={true} placeholder="Digite sua senha" />
                    <Text style={styles.text}>Confirmar Senha</Text>
                    <TextInput icon="key" validator={text => { setConfirmationPassword(text); return passwordConfirmationValidator(text); }} value={confirmationPassword} secureTextEntry={true}
                        placeholder="Digite novamente sua senha" />
                   <TouchableOpacity style={styles.nextButton}
                        containerStyle={{
                            opacity: (emailValidator(email) && passwordValidator(password) && passwordConfirmationValidator(confirmationPassword)) ? 1 : .4,
                        }}
                        disabled={!(emailValidator(email) && passwordValidator(password) && passwordConfirmationValidator(confirmationPassword))} onPress={() => pressButton()}>
                        <Text style={styles.nextText}>Finalizar cadastro</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>

        </View>
    );
}

export default AcessData;