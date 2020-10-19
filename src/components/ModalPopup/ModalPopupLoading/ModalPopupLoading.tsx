import React, { useState } from 'react';
import styles from './styles'
import { Text, Modal, View, Image } from 'react-native'

interface ModalPopupLoadingInterface {
    showModal: boolean;
}

const ModalPopupLoading = (props: ModalPopupLoadingInterface) => {
    const [show, setShow] = useState(props.showModal);

    return (
        <Modal
            animated={true}
            animationType="fade"
            visible={show}
            transparent={true}
            statusBarTranslucent={true}>

            <View style={styles.container}>
                <View style={styles.subcontainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.bakerPic} resizeMode="contain" source={require('../../../../assets/images/daily2.png')} />
                    </View>
                    <View style={styles.imageContainer}>
                        <Image style={styles.bakerPic} resizeMode="contain" source={require('../../../../assets/images/loading.gif')} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Aguarde...</Text>
                    </View>
                </View>
            </View>
        </Modal>)
}

export default ModalPopupLoading;