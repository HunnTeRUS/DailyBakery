import React, { useState } from 'react';
import { View, StatusBar, KeyboardAvoidingView, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import TextInput from '../../components/TextInput'
import Password from '../../../assets/svgs/Password'
import ModalPopupInfos from '../../components/ModalPopup/ModalPopupInfo/ModalPopupInfos';
import ModalPopupInterrogs from '../../components/ModalPopup/ModalPopupInterrog/ModalPopupInterrogs';
import ModalPopupWarns from '../../components/ModalPopup/ModalPopupWarn/ModalPopupWarns'
import ModalPopupLoading from '../../components/ModalPopup/ModalPopupLoading/ModalPopupLoading'
import changePasswordServices from '../../services/UpdatePasswordServices/UpdatePasswordServices';
import getLoggedUser from '../../utils/LoggedUser';

const ChangeProfilePasswordScreen = () => {
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewpass] = useState('');
    const [newPassConfirmation, setNewPassConfirmation] = useState('');
    const [show, setShow] = useState(false);
    const [showWarn, setShowWarn] = useState(false);
    const [showLoading, setShowLoading] = useState(false)
    const [showAsk, setShowAsk] = useState(false)
    const [errorMessageForModal, setErrorMessageForModal] = useState("");
    const passwordValidator = (password: string) => password.length >= 6;
    const newpasswordValidator = (password: string) => password.length >= 6;
    const confirmationpasswordValidator = (password: string) => password.length >= 6 && password === newPass;
    StatusBar.setHidden(true)
    const navigation = useNavigation();

    async function pressButton() {
        setShowLoading(true)
        const loggedUser = await getLoggedUser();

        await changePasswordServices(loggedUser.email ? loggedUser.email : "", loggedUser.id_user ? loggedUser.id_user : "", newPass, oldPass)
            .then(response => {
                if (response.error === "" || response.error === undefined || response.error === null) {
                    setShowLoading(false)
                    setShow(true)
                }
                else {
                    setShowLoading(false)
                    setErrorMessageForModal(response.error as string)
                    setShowWarn(true)
                }

            }).catch(() => {
                setShowLoading(false)
                setErrorMessageForModal('Ocorreu um erro ao alterar sua senha, tente novamente mais tarde!')
                setShowWarn(true)
            });

    }
    return (
        <View style={styles.container}>
            {!show ? <></> : <ModalPopupInfos onPressCloseButton={() => { navigation.navigate('MapScreen') }} textToShow='Sua senha foi alterada com sucesso!' showModal={show} setShow={setShow} />}
            {!showWarn ? <></> : <ModalPopupWarns functionToButton={() => { }} textToShow={errorMessageForModal} showModal={showWarn} setShow={setShowWarn} />}
            {!showLoading ? <></> : <ModalPopupLoading showModal={showLoading} />}
            {!showAsk ? <></> : <ModalPopupInterrogs functionToYesButton={pressButton} textToTitle='Alterar senha'
                textToShow='Tem certeza de que deseja alterar sua senha?' showModal={showAsk} setShow={setShowAsk} />}
            <KeyboardAvoidingView style={styles.keyboardView} behavior="padding">
                <View style={styles.passwordImage}>
                    <Password />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        Alteração de senha
                    </Text>
                    <Text style={styles.subtitle}>
                        Aqui voce poderá alterar a sua senha, basta digitar sua senha atual e a nova senha!
                    </Text>
                </View>
                <View style={styles.containerInput}>
                    <Text style={styles.textCep}>Senha Atual</Text>
                    <TextInput icon="lock" placeholder="Digite sua senha atual" value={oldPass} validator={text => { setOldPass(text); return passwordValidator(text) }} secureTextEntry={true} />

                    <Text style={styles.textNumber}>Nova Senha</Text>
                    <TextInput icon="lock" placeholder="Digite sua nova senha" value={newPass} validator={text => { setNewpass(text); return newpasswordValidator(text) }} secureTextEntry={true} />

                    <Text style={styles.textNumber}>Confirme sua nova senha</Text>
                    <TextInput icon="lock" placeholder="Digite sua nova senha novamente" value={newPassConfirmation} validator={text => { setNewPassConfirmation(text); return confirmationpasswordValidator(text) }} secureTextEntry={true} />

                </View>
            </KeyboardAvoidingView>
            <TouchableOpacity
                disabled={(passwordValidator(oldPass) && (newpasswordValidator(newPass) && (confirmationpasswordValidator(newPassConfirmation)))) ? false : true}
                containerStyle={{
                    opacity: (passwordValidator(oldPass) && (newpasswordValidator(newPass) && (confirmationpasswordValidator(newPassConfirmation)))) ? 1 : .4,
                }}
                style={styles.nextButton}
                onPress={() => { setShowAsk(true) }}>
                <Text style={styles.nextText}>Trocar senha</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChangeProfilePasswordScreen;