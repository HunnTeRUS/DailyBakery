import React, { useState } from 'react';
import { View, Image, Text, KeyboardAvoidingView } from 'react-native';
import TextInput from '../../components/TextInput';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles'
import ModalPopupLoading from '../../components/ModalPopup/ModalPopupLoading/ModalPopupLoading'
import ModalPopupWarns from '../../components/ModalPopup/ModalPopupWarn/ModalPopupWarns'
import ModalPopupInput from './ModalPopupInput/ModalPopupInput'

const ForgotPassword = () => {

    const [typedEmail, setTypedEmail] = useState("")
    const [show, setShow] = useState(false);
    const [showWarn, setShowWarn] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [textToShowError, setTextToShowError] = useState('CNPJ invalido, tente novamente')

    return (
        <View style={styles.container}>
            {!showWarn ? <></> : <ModalPopupWarns functionToButton={() => {}} textToShow={textToShowError} showModal={showWarn} setShow={setShowWarn} />}
            {!showLoading ? <></> : <ModalPopupLoading showModal={showLoading} />}
            {!show ? <></> : <ModalPopupInput textToShow='Digite o codigo que foi enviado em seu email' showModal={show} setShow={setShow} />}

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
                        maxLength={18}
                        autoCapitalize="none" />
                    <Text style={styles.infos}>Você receberá um e-mail com um codigo para prosseguir com a alteração de sua senha</Text>
                </View>
            </KeyboardAvoidingView>
            <TouchableOpacity
                onPress={() => {
                    setShow(true)
                }}
                style={styles.nextButton}>
                <Text style={styles.nextText}>Enviar</Text>
            </TouchableOpacity>

        </View>
    )
}


export default ForgotPassword;