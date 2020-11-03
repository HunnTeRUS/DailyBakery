import React, { useEffect, useState } from 'react';
import { View, StatusBar, KeyboardAvoidingView, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Contact from '../../../assets/svgs/Contact'
import { MaterialIcons } from '@expo/vector-icons'
import { Linking } from 'expo';
import TextInput from '../../components/TextInput';
import getLoggedUser, { setAndChangeLoggedUser } from '../../utils/LoggedUser';
import { celPhoneMask, removeMask } from '../../utils/Masks';
import ModalPopupInfos from '../../components/ModalPopup/ModalPopupInfo/ModalPopupInfos';
import ModalPopupLoading from '../../components/ModalPopup/ModalPopupLoading/ModalPopupLoading';
import ModalPopupInterrogs from '../../components/ModalPopup/ModalPopupInterrog/ModalPopupInterrogs';
import changeContactInfoServices from '../../services/ChangeContactInfo/ChangeContactInfoServices';

const ChangeContactInfo = () => {
    const phoneValidator = (phone: string) => { return phone.length === 15 ? true : false };
    StatusBar.setHidden(true);
    const [cellPhone, setCellPhone] = useState('');
    const [valorParaGambiarra, setValorParaGambiarra] = useState(false);
    const [show, setShow] = useState(false);
    const [showWarn, setShowWarn] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [textToShow, setTextToShow] = useState('Suas informações de contato foram alteradas com sucesso!');
    const [response, setResponse] = useState({});
    const navigation = useNavigation();

    useEffect(() => {
        const num = async () => {
            const obj = await getLoggedUser();
            const tel = obj?.numero_celular ? obj?.numero_celular : ""
            setCellPhone(celPhoneMask(tel.startsWith("55") ?  tel.substring(2) : tel));
        }
        num();
    }, []);


    function redirectIfUpdateHasFinished() {
        if (response) {
            navigation.navigate('MapScreen');
            setResponse({});
        }
    }

    async function updateNumberLoggedUser(){
        var user = await getLoggedUser();
        if(user) {
            user.numero_celular = cellPhone;
            await setAndChangeLoggedUser(user);
        }
    }

    async function pressButtonAndChangeContactInfo(){
        setShowLoading(true);
        
        await changeContactInfoServices(removeMask(cellPhone)).then(response => {
            if(response.error === "" || response.error === undefined || response.error === null){
                updateNumberLoggedUser();
                setShowLoading(false);
                setShow(!show);
            }
            else {
                setTextToShow(response.error);
                setShowLoading(false);
                setShow(!show);
            }
            
        }).catch(() =>{
            setTextToShow("Ocorreu um erro ao alterar seus dados de contato, tente novamente mais tarde");
            setShowLoading(false);
            setShow(!show);
        })
    }


    return (
        <View style={styles.container}>
            {!show ? <></> : <ModalPopupInfos onPressCloseButton={redirectIfUpdateHasFinished} textToShow={textToShow} showModal={show} setShow={setShow} />}
            {!showLoading ? <></> : <ModalPopupLoading showModal={showLoading} />}
            {!showWarn ? <></> : <ModalPopupInterrogs functionToYesButton={pressButtonAndChangeContactInfo} textToTitle='Alterar contato'
                textToShow='Tem certeza de que deseja alterar seus dados de contato?' showModal={showWarn} setShow={setShowWarn} />}
            <View style={styles.passwordImage}>
                <Contact />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Alteração de dados de contato</Text>
                <Text style={styles.subtitle}>Altere os seus dados de contato, lembre-se, use seu número de celular principal!</Text>
            </View>

            <KeyboardAvoidingView style={styles.keyboardView} behavior="padding">
                <View style={styles.containerInput}>
                    <Text style={styles.textCep}>Numero de celular</Text>
                    <TextInput style={styles.input} value={cellPhone} icon="smartphone" placeholder="Numero de celular" validator={text => {
                        if (!valorParaGambiarra) {
                            text = celPhoneMask(text);
                            setValorParaGambiarra(true)
                        }
                        setCellPhone(celPhoneMask(text));
                        return phoneValidator(text);
                    }
                    } keyboardType="number-pad" />
                </View>
            </KeyboardAvoidingView>
            <TouchableOpacity
                disabled={(phoneValidator(cellPhone)) ? false : true}
                containerStyle={{
                    opacity: ((phoneValidator(cellPhone))) ? 1 : .4,
                }}
                style={styles.nextButton}
                onPress={() => {
                    setShowWarn(true)
                }
                }>
                <Text style={styles.nextText}>Alterar dados</Text>
            </TouchableOpacity>

        </View>
    )
}

export default ChangeContactInfo;