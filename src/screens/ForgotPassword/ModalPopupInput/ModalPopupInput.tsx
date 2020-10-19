import React, { useState } from 'react';
import styles from './styles'
import { Text, Modal, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Baker from '../../../../assets/svgs/Baker'
import ModalPopupInfos from '../../../components/ModalPopup/ModalPopupInfo/ModalPopupInfos'

interface ModalPopupInterface {
    showModal: boolean;
    setShow(trueFalse: boolean): void;
    textToShow: string;
    codeReceivedFromAPI: string;
    emailReceivedFromAPI: string;
    cnpjReceivedFromAPI: string;
    userId: string;
}

const ModalPopup = (props: ModalPopupInterface) => {
    const [show, setShow] = useState(props.showModal);
    const navigation = useNavigation();
    const [tries, setTries] = useState(0);
    const [code, setCode] = useState('');

    const errorMessage = <View style={styles.textContainerError}>
                            <Text style={styles.titleError}>Código incorreto, tente novamente</Text>
                         </View>;

    function verifyCode(codeTypedByUser: string) {
        if (props.codeReceivedFromAPI === codeTypedByUser) {
            props.setShow(false) 
            setTries(0)
            navigation.navigate('ChangePasswordForgot', { email: props.emailReceivedFromAPI, userId: props.userId });
        }
        else {
            if (tries <= 2) {
                setTries(1 + tries);
            }
            else {
                props.setShow(false) 
                navigation.navigate('ForgotPassword');
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
                            <TextInput selectionColor='#FEC044' onChangeText={text => setCode(text)} style={styles.inputNumber} autoCapitalize="none" placeholder='Digite seu codigo' />
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