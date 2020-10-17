import React,{useState} from 'react';
import styles from './styles'
import { Text,  Modal, View, Image, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Baker from '../../../../assets/svgs/BakerCaution'

interface ModalPopupInterface{
    showModal: boolean;
    setShow(trueFalse: boolean): void;
    textToShow: string;
    functionToButton?(): void;
}   

const ModalPopup = (props: ModalPopupInterface) => {
    const [show, setShow] = useState(props.showModal);

    return (
        <Modal
            animated={true}
            animationType="fade"
            visible={show}
            transparent={true}
            statusBarTranslucent={true}
        >
            <View style={styles.container}>
                <View style={styles.subcontainer}>
                    <View style={styles.imageContainer}>
                        <View style={styles.image}>
                            <Baker heightImage={200} widthImage={200}/>
                        </View>    
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Atenção</Text>
                        <Text style={styles.subtitle}>{props.textToShow}</Text>
                    </View>
                    <View style={styles.buttonContainer}>  
                        <TouchableOpacity style={styles.nextButton} onPress={() => {
                                if(props.functionToButton) props.functionToButton();
                                props.setShow(false)}}>
                            <Text style={styles.nextText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalPopup;