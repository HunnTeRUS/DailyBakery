import React, { useState } from 'react';
import styles from './styles'
import { Text, Modal, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import NotFound from '../../../../assets/svgs/NotFound404'

interface ModalPopupInterface {
    showModal: boolean;
    setShow(trueFalse: boolean): void;
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
                                <NotFound />
                            </View>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>Nenhuma padaria encontrada</Text>
                            <Text style={styles.subtitle}>Nenhuma padaria ao seu redor usa o nosso app, recomende algumas padarias para nós, passando qualquer informação que tiver.</Text>

                            <TextInput selectionColor='#FEC044' onChangeText={text => setCode(text)} style={styles.inputNumber} autoCapitalize="none" placeholder='Telefone, email, endereço, nome' />
                        </View>
                        {tries < 4 && tries !== 0 ? errorMessage : <></>}
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.nextButton} onPress={() => {setShow(false)}}>
                                <Text style={styles.nextText}>Enviar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.closeButton} onPress={() => {setShow(false)}}>
                                <Text style={styles.closeText}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </Modal>
    )
}

export default ModalPopup;