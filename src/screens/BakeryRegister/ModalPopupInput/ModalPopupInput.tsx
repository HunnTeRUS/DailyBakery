import React, { useState } from 'react';
import styles from './styles'
import { Text, Modal, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Baker from '../../../../assets/svgs/Baker'
import ModalPopupInfos from '../../../components/ModalPopup/ModalPopupInfo/ModalPopupInfos'
import ModalPopupWarns from '../../../components/ModalPopup/ModalPopupWarn/ModalPopupWarns'
import RegisterService from '../../../services/ReisterServices/RegisterService'
import ModalPopupLoading from '../../../components/ModalPopup/ModalPopupLoading/ModalPopupLoading';
interface ModalPopupInterface {
    showModal: boolean;
    setShow(trueFalse: boolean): void;
    textToShow: string;
    codeReceivedFromAPI: string;
    emailReceivedFromAPI: string;
    nameReceivedFromAPI: string;
    password: string;
    phoneNumber: string
}

const ModalPopup = (props: ModalPopupInterface) => {
    const [show, setShow] = useState(props.showModal);
    const navigation = useNavigation();
    const [tries, setTries] = useState(0);
    const [code, setCode] = useState('');
    const [showWarn, setShowWarn] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [textToShowError, setTextToShowError] = useState('Código inválido, tente novamente')
    const errorMessage = <View style={styles.textContainerError}>
        <Text style={styles.titleError}>Código incorreto, tente novamente</Text>
    </View>;

    async function verifyCode(codeTypedByUser: string) {
        if (props.codeReceivedFromAPI === codeTypedByUser) {
            setShowLoading(true)
            await RegisterService(props.nameReceivedFromAPI, props.phoneNumber, props.password, props.emailReceivedFromAPI).then(
                response => {
                    if (response.error === "" || response.error === undefined || response.error === null) {
                        navigation.navigate('ConfirmationScreen', { nome: response.nome, email: response.email, numero_celular: response.numero_celular, senha: props.password });
                        props.setShow(false)
                        setTries(0)
                    } else { 
                        setTextToShowError(response.error as string)
                        setShowWarn(true)
                        setShowLoading(false)    
                    }
                }).catch(error => {
                    setShowWarn(true)
                    setShowLoading(false)
                })
        }
        else {
            if (tries <= 2) {
                setTries(1 + tries);
            }
            else {
                props.setShow(false)
                navigation.navigate('AcessData');
            }
        }
    }

    return (
        <Modal
            animated={true}
            animationType="fade"
            visible={show}
            transparent={true}
            statusBarTranslucent={true}
        >
            {!showWarn ? <></> : <ModalPopupWarns textToShow={textToShowError} showModal={showWarn} setShow={setShowWarn} />}
            {!showLoading ? <></> : <ModalPopupLoading showModal={showLoading} />}
            <View style={styles.container}>
                <KeyboardAvoidingView behavior="position">

                    <View style={styles.subcontainer}>
                        <View style={styles.imageContainer}>
                            <View style={styles.image}>
                                <Baker heightImage={200} widthImage={200} />
                            </View>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>Digite o codigo recebido em seu email</Text>
                            <TextInput selectionColor='#FEC044' onChangeText={text => setCode(text)} style={styles.inputNumber} autoCapitalize="none" placeholder='Digite seu codigo' keyboardType="number-pad" />
                        </View>
                        {tries < 4 && tries !== 0 ? errorMessage : <></>}
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.nextButton} onPress={() => {
                                verifyCode(code)
                            }}>
                                <Text style={styles.nextText}>Validar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </Modal>
    )
}

export default ModalPopup;