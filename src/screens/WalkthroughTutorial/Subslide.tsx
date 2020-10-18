import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Comecar from './Components/Comecar'
import { SLIDE_HEIGHT } from './Slide';
import SkipButton from './Components/SkipButton';

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container:{
        position: "absolute",
        width,
        bottom: 0,
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        paddingBottom: 25,
        paddingHorizontal: 20
    },
    dualButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: "flex-end",
    },
    dualButtonAux: {
        width: '20%'
    }
})

interface SubslideProps{
    icon?: any,
    last?: boolean
    onPress: () => void;
    onPressSkip: () => void;
}


const Subslide = ({last, onPress, onPressSkip}: SubslideProps) => {
    return(
        <View style={styles.container}>
            <View style={styles.dualButton}>
                <Comecar label={last ? "Começar": "Próximo"} {...{onPress}}></Comecar>
            </View>
        </View>

    );
};

export default Subslide;