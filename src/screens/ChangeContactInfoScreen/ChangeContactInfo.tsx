import React from 'react';
import { View, StatusBar, KeyboardAvoidingView, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Contact from '../../../assets/svgs/Contact'
import { MaterialIcons } from '@expo/vector-icons'
import { Linking } from 'expo';
import TextInput from '../../components/TextInput';

const ChangeContactInfo = () => {
    StatusBar.setHidden(true)

    return (
        <View style={styles.container}>
            <View style={styles.passwordImage}>
                <Contact />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Alteração de dados de contato</Text>
                <Text style={styles.subtitle}>Altere os seus dados de contato, lembre-se, use seu número de telefone/celular principal!</Text>
            </View>

            <KeyboardAvoidingView style={styles.keyboardView} behavior="padding">
                <View style={styles.containerInput}>
                    <Text style={styles.textCep}>Numero de celular</Text>
                    <TextInput style={styles.input} icon="lock" placeholder="Numero de telefone" validator={text => { return true }} />

                    <Text style={styles.textNumber}>Numero de telefone</Text>
                    <TextInput style={styles.input} icon="lock" placeholder="Novo numero de celular" validator={text => { return true }} />
                </View>
            </KeyboardAvoidingView>
            <TouchableOpacity
                style={styles.nextButton}
                onPress={() => { }}>
                <Text style={styles.nextText}>Alterar dados</Text>
            </TouchableOpacity>

        </View>
    )
}

export default ChangeContactInfo;