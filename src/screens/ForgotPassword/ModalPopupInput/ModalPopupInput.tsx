import React, { useState } from 'react';
import styles from './styles'
import { Text, Modal, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ModalPopupInfos from '../../../components/ModalPopup/ModalPopupInfo/ModalPopupInfos'
import Baker from '../../../components/ImagesComponents/Baker';

interface ModalPopupInterface {
    showModal: boolean;
    setShow(trueFalse: boolean): void;
    textToShow: string;
}

const ModalPopup = (props: ModalPopupInterface) => {
    const [show, setShow] = useState(props.showModal);
    const navigation = useNavigation();
    const [tries, setTries] = useState(0);
    const [code, setCode] = useState('');

    const errorMessage = <View style={styles.textContainerError}>
                            <Text style={styles.titleError}>Código incorreto, tente novamente</Text>
                         </View>;

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
                                setShow(false)
                                navigation.navigate('ChangePasswordForgot');
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