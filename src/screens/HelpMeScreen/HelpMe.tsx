import React from 'react';
import { View, StatusBar, KeyboardAvoidingView, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Question from '../../../assets/svgs/Question'
import { MaterialIcons } from '@expo/vector-icons'
import { Linking } from 'expo';

const HelpMe = () => {
    StatusBar.setHidden(true)

    return (
        <View style={styles.container}>
            <View style={styles.passwordImage}>
                <Question />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Preciso de ajuda!</Text>
                <Text style={styles.subtitle}>Se for preciso, veja o tutorial novamente. Caso não esclareça sua duvida, envie-nos um email explicando seu problema!</Text>
            </View>

            <TouchableOpacity style={styles.option}>
                <View style={[styles.iconContainer]}>
                    <MaterialIcons name="video-library" size={30} style={styles.iconOption} color="white" />
                </View>
                <Text style={styles.textOption}>Ver tutorial novamente</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => {
                Linking.openURL('mailto:otavio201378@gmail.com?subject=Duvida - DailyBakery')
            }}>
                <View style={[styles.iconContainer, {backgroundColor: "red"}]}>
                    <MaterialIcons name="mail" size={30} style={styles.iconOption} color="white" />
                </View>
                <Text style={styles.textOption}>Envie-nos um email!</Text>
            </TouchableOpacity>

        </View>
    )
}

export default HelpMe;