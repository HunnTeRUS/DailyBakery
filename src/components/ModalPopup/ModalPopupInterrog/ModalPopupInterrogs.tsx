import React,{useState} from 'react';
import styles from './styles'
import { Text,  Modal, View, Image, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Baker from '../../ImagesComponents/BakerInterrog' 

interface ModalPopupInterface{
    showModal: boolean;
    setShow(trueFalse: boolean): void;
    textToShow: string;
    functionToYesButton?() : void;
    functionToNoButton?() : void;
    textToTitle?: string;
}   

const ModalPopup = (props: ModalPopupInterface) => {
    const [show, setShow] = useState(props.showModal);

    const navigation = useNavigation();
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
                        <Text style={styles.title}>{props.textToTitle ? props.textToTitle : 'Atenção'}</Text>
                        <Text style={styles.subtitle}>{props.textToShow}</Text>
                    </View>
                    <View style={styles.buttonContainer}>  
                        <TouchableOpacity style={styles.noButton} onPress={() => {
                            if(props.functionToNoButton) props.functionToNoButton()
                                props.setShow(false)
                            }}>
                            <Text style={styles.noText}>Não</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.yesButton} onPress={()=>{
                            if(props.functionToYesButton) props.functionToYesButton()
                            props.setShow(false)
                            }}>
                            <Text style={styles.yesText}>Sim</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalPopup;