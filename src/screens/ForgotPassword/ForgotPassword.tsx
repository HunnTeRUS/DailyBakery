import React, { useState } from 'react';
import { View, Image, Text, KeyboardAvoidingView } from 'react-native';
import TextInput from '../../components/TextInput';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles'
import ModalPopupLoading from '../../components/ModalPopup/ModalPopupLoading/ModalPopupLoading'
import ModalPopupWarns from '../../components/ModalPopup/ModalPopupWarn/ModalPopupWarns'
import ModalPopupInput from './ModalPopupInput/ModalPopupInput'
import sendVerificationEmailServices from '../../services/ForgotPasswordServices/ForgotPasswordServices'

const ForgotPassword = () => {

    const [typedEmail, setTypedEmail] = useState("")
    const [show, setShow] = useState(false);
    const [showWarn, setShowWarn] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [textToShowError, setTextToShowError] = useState('CNPJ invalido, tente novamente')

    const [codeReceivedFromApi, setCodeReceivedFromApi] = useState('')
    const [cnpjReceivedFromApi, setCnpjReceivedFromApi] = useState('')
    const [emailReceivedFromApi, setEmailReceivedFromApi] = useState('')
    const [userId, setUserId] = useState('')

    async function pressButton() {
        setShowLoading(true)

        await sendVerificationEmailServices(typedEmail).then(response => {
            if (response.error !== "" && response.error !== undefined && response.error !== null) {
                setShowLoading(false)
                setTextToShowError(response.error ? response.error as string : "")
                setShowWarn(true)
                return;
             }
            else {
                setUserId(response._id ? response._id : "")
                setCodeReceivedFromApi(response.codigoEnviado ? response.codigoEnviado as string: "")
                setCnpjReceivedFromApi(response.cnpj ? response.cnpj : "")
                setEmailReceivedFromApi(response.email ? response.email : "")
                setShowLoading(false)
                setShow(true)
                return;
            }
        }).catch(error => {
            setShowLoading(false)
            setTextToShowError('Ocorreu um erro, tente novamente mais tarde.')
            setShowWarn(true)
            setShowLoading(false)
            console.log(error)
            return;
        });
    }

    return (
        <View style={styles.container}>
            {!show ? <></> : 
                <ModalPopupInput 
                    cnpjReceivedFromAPI={cnpjReceivedFromApi}
                    emailReceivedFromAPI={emailReceivedFromApi}
                    codeReceivedFromAPI={codeReceivedFromApi} 
                    userId={userId}
                    textToShow='Digite o codigo que foi enviado em seu email' 
                    showModal={show} 
                    setShow={setShow} />}

            {!showWarn ? <></> : <ModalPopupWarns textToShow={textToShowError} showModal={showWarn} setShow={setShowWarn} />}
            {!showLoading ? <></> : <ModalPopupLoading showModal={showLoading} />}

            <KeyboardAvoidingView behavior="position">
                <Image resizeMode="contain" source={require('../../../assets/images/daily2.png')} style={styles.image} />
                <Text style={styles.title}>Recuperação de Senha</Text>

                <View style={styles.inputs}>
                    <Text style={styles.text}>Email</Text>
                    <TextInput selectionColor='#FEC044'
                        icon="briefcase"
                        placeholder="Digite seu email"
                        validator={text => {
                            setTypedEmail(text)
                            return (text.length === 18)
                        }}
                        value={typedEmail}
                        autoCapitalize="none" />
                    <Text style={styles.infos}>Você receberá um e-mail com um codigo para prosseguir com a alteração de sua senha</Text>
                </View>
            </KeyboardAvoidingView>
            <TouchableOpacity
                onPress={() => {
                    pressButton()
                }}
                style={styles.nextButton}>
                <Text style={styles.nextText}>Enviar</Text>
            </TouchableOpacity>

        </View>
    )
}


export default ForgotPassword;