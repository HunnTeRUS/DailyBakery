import React from 'react';
import { View, StatusBar, KeyboardAvoidingView, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import TextInput from '../../components/TextInput'
import Password from '../../../assets/svgs/Password'

const ChangeProfilePasswordScreen = () => {
    StatusBar.setHidden(true)
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
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
                    <Text style={styles.textCep}>Senha Antiga</Text>
                    <TextInput style={styles.input} icon="lock" placeholder="Digite sua senha" validator={text => { return true }} secureTextEntry={true} />

                    <Text style={styles.textNumber}>Nova Senha</Text>
                    <TextInput style={styles.input} icon="lock" placeholder="Digite sua nova senha" validator={text => { return true }} secureTextEntry={true} />

                    <Text style={styles.textNumber}>Confirme sua nova senha</Text>
                    <TextInput style={styles.input} icon="lock" placeholder="Digite sua nova senha novamente" validator={text => { return true }}  secureTextEntry={true} />
                </View>
            </KeyboardAvoidingView>
            <TouchableOpacity
                style={styles.nextButton}
                onPress={() => { }}>
                <Text style={styles.nextText}>Trocar senha</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChangeProfilePasswordScreen;