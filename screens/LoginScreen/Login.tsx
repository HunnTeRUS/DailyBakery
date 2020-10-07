import React from 'react';
import { View, StatusBar, KeyboardAvoidingView, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import TextInput from '../../components/TextInput'
import MapScreen from '../MapScreen/MapScreen';

const Login = () => {
    StatusBar.setHidden(true)
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior="position" style={{marginBottom: "-15%"}}>
                <Image resizeMode="contain" source={require('../../assets/images/daily2.png')} style={styles.image} />
                <View style={styles.inputs}>
                    <Text style={styles.text}>Email</Text>
                    <TextInput icon="mail" placeholder="Digite seu email"
                        maxLength={18} blurOnSubmit={true} 
                        validator={
                            text => {
                                return text.length >=1 ? true : false;
                            }
                        } />
                    <Text style={styles.text}>Senha</Text>
                    <TextInput icon="lock" placeholder="Digite sua senha"
                        secureTextEntry={true}
                        validator={text => { return text.length >= 6; }} />
                </View>
            </KeyboardAvoidingView>
            <TouchableOpacity  onPress={() => {navigation.navigate("MapScreen")}} style={styles.nextButton}>
                <Text style={styles.nextText}>Entrar</Text>
            </TouchableOpacity>
            <View style={styles.divLinks}>
                <TouchableOpacity onPress={() => {}}>
                    <Text style={{
                        fontFamily: "Poppins-ExtraLight",
                        fontSize: 17,
                    }}>Desejo criar meu cadastro</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("ForgotPassword")}} >
                    <Text style={{
                        fontFamily: "Poppins-ExtraLight",
                        fontSize: 17,
                        marginTop: '10%',
                    }}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login;