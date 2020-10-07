import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TextInput as RNTextInput, TextInputProps as RNTextInputProps } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { Value } from 'react-native-reanimated';

const { height, width } = Dimensions.get('window');

interface TextInputProps extends RNTextInputProps {
    icon: string,
    validator: (input: string) => boolean;
}

const style = StyleSheet.create({
    text: {
        marginLeft: 3,

    }
});

const Valid = true;
const Invalid = false;
const Pristine = null;

type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({ icon, validator, ...props }: TextInputProps) => {
    const [state, setState] = useState<InputState>(Pristine);
    const [input, setInput] = useState("");

    const validate = () => {

        const valid = validator(input);

        setState(valid);
    };

    const onChangeText = (text: string) => {
        setInput(text);
        if (validator(text)) {
            setState(validator(text));
        }
        else {
            setState(Invalid)
        }
    };

    const color = state === Pristine ? "black" : (state === Valid ? "#2CB9B0" : "#FF0058");
    const borderColor = state === Pristine ? "white" : (state === Valid ? "#2CB9B0" : "#FF0058");

    return (
        <View style={{
            flexDirection: "row",
            backgroundColor: "white",
            width: '100%',
            borderRadius: 5,
            height: 45,
            alignSelf: "center",
            borderColor: borderColor,
            paddingRight: 5,
            paddingLeft: 5,
            elevation: 2,
            shadowColor: '#000',
            shadowOffset: {
                width: 4,
                height: 4
            }
        }}>
            <View style={{ height: 45, flexDirection: "row", display: "flex", alignItems: "center", marginRight: 5 }}>
                <Icon name={icon} size={20} {...{ color }} />
            </View >
            <View style={{ flex: 1, justifyContent: "center" }}>
                <RNTextInput selectionColor={state ? "green": "red"} underlineColorAndroid="transparent" style={{ height: "100%" }} onFocus={validate} onChangeText={onChangeText}{...props} />
            </View>
            {
                (state === Valid || state === Invalid) && (

                    <View style={{ borderRadius: 20, height: 20, width: 20, backgroundColor: borderColor, alignContent: "center", justifyContent: "center", alignItems: "center", alignSelf: "center" }}>
                        <Icon name={state === Valid ? "check" : "x"} color="white" />
                    </View>
                )
            }

        </View>
    )
}

export default TextInput;