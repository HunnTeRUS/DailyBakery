import React, { useState } from 'react';
import { View, StatusBar, KeyboardAvoidingView, Text, Image } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import styles from './styles';
import TextInput from '../../components/TextInput'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import doLoginServices from '../../services/LoginServices/LoginService'
import ModalPopupLoading from '../../components/ModalPopup/ModalPopupLoading/ModalPopupLoading';
import ModalPopupWarns from '../../components/ModalPopup/ModalPopupWarn/ModalPopupWarns'
import getLoggedUser, {removeLoggedUser, setAndChangeLoggedUser}  from '../../utils/LoggedUser'
import verifyToken from '../../services/VerifyTokenServices/VerifyTokenService'

const Login = () => {
    StatusBar.setHidden(true)
    const navigation = useNavigation();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [showWarn, setShowWarn] = React.useState(false);
    const [textToShowOnWarn, setTextToShowOnWarn] = React.useState("");

    const [showLoading, setShowLoading] = React.useState(false)

    const emailValidator = (email: string) : boolean =>
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

    const passwordValidator = (field: string) : boolean => field.length >= 6;

    const submitButtonValidator = () => {
        return emailValidator(email) && passwordValidator(password)
    }

    useFocusEffect(() => {
        const isValid = async () => {
            await verifyToken().then(response => {
                if (response.error === "" || response.error === undefined || response.error === null){
                    if(response.email !== "" && response.email !== undefined && response.email !== null) {
                        setAndChangeLoggedUser(response);
                        navigation.navigate('MapScreen')
                    }
                    else {
                        removeLoggedUser('loggedUser')
                        return;
                    }
                }
                else {
                    removeLoggedUser('loggedUser')
                    return;
                }
            }).catch(error => {
                console.log(error)
                removeLoggedUser('loggedUser')
                return;
            });
        }

        isValid();
    })

    async function logUser() {
        setShowLoading(true)
        await doLoginServices(email, password).then(response => {
            if (response.error === "" || response.error === undefined || response.error === null) {
                setAndChangeLoggedUser(response)
                setShowLoading(false)
                navigation.navigate('MapScreen')
            }
            else {
                setShowLoading(false)
                setTextToShowOnWarn(String(response.error))
                setShowWarn(true)
            }
        }).catch(error => {
            setShowLoading(false)
            setTextToShowOnWarn("Ocorreu um erro ao tentar acessar esta funcionalidade, tente novamente mais tarde")
            console.log(error)
            setShowWarn(true)
        }
        );
    }

    return (
        <>
            <View style={styles.container}>
            {!showWarn ? <></> : <ModalPopupWarns functionToButton={() => { }} textToShow={textToShowOnWarn} showModal={showWarn} setShow={setShowWarn} />}
            {!showLoading ? <></> : <ModalPopupLoading showModal={showLoading} />}
            
                <LinearGradient
                    colors={["#f2ab1d", "#facf78"]}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: "95%",
                        borderBottomRightRadius: 150
                    }}
                >
                    <KeyboardAvoidingView behavior="position" style={{}}>
                        <Image resizeMode="contain" source={require('../../../assets/images/bread2-0.png')} style={styles.image} />
                        <View style={styles.inputs}>
                            <Text style={styles.text}>Email</Text>
                            <TextInput icon="mail" placeholder="Digite seu email"
                                autoCapitalize="none"
                                blurOnSubmit={true}
                                value={email}
                                validator={
                                    text => {
                                        setEmail(text)
                                        return emailValidator(text);
                                    }
                                } />
                            <Text style={styles.text}>Senha</Text>
                            <TextInput icon="lock" placeholder="Digite sua senha"
                                autoCapitalize="none"
                                secureTextEntry={true}
                                value={password}
                                validator={text => { 
                                    setPassword(text)
                                    return passwordValidator(text); 
                                    }
                                } />
                        </View>
                    </KeyboardAvoidingView>

                    <TouchableOpacity 
                        onPress={() => { logUser() }}
                        style={styles.nextButton}
                        disabled={submitButtonValidator() ? false : true}
                        containerStyle={{
                                opacity: submitButtonValidator() ? 1 : .4,
                        }}>
                        <Text style={styles.nextText}>Entrar</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
            <View style={styles.divLinks}>
                <TouchableOpacity onPress={() => { navigation.navigate("PersonalData") }}>
                    <Text style={{
                        fontFamily: "Poppins-Regular",
                        fontSize: 17,
                        color: "grey",
                        marginTop: '5%',
                    }}>Desejo criar meu cadastro</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate("ForgotPassword") }} >
                    <Text style={{
                        fontFamily: "Poppins-Regular",
                        fontSize: 17,
                        color: "grey",
                        marginTop: '20%',
                    }}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Login;