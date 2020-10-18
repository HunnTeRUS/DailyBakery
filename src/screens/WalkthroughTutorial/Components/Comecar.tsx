import React from "react";
import { Text, StyleSheet, Dimensions, AsyncStorage } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from "@expo/vector-icons";

interface ComecarProps {
    label: string,
    onPress: () => void;
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        height: 40,
        flexDirection: "row",
        width: (width / 3),
        justifyContent: 'center',
        alignItems: "center"
    },
    label: {
        fontSize: 20,
        textAlign: "center",
        color: '#ffbd59',
        fontFamily: "Poppins-Regular",
    },
});

const Comecar = ({ label, onPress }: ComecarProps) => {
    const navigation = useNavigation();

    if (label === 'Começar') {
        onPress = async () => {
            navigation.navigate('HelpMe');
        }
    }

    return (
        <RectButton style={styles.container} {...{ onPress }}>
            <Text style={styles.label}>{label}</Text>
            <MaterialIcons color="#ffbd59" size={20} name="keyboard-arrow-right"/>
        </RectButton>
    )
}

export default Comecar;