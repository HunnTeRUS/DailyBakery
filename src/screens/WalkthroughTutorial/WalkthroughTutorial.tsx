import React, { useRef, useState } from "react";
import { View, ScrollView, StyleSheet, Dimensions, AsyncStorage, Text, BackHandler } from "react-native";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import Animated, { multiply, divide, Value } from "react-native-reanimated";
import { onScrollEvent, useValue } from "react-native-redash";
import Subslide from "./Subslide";
import Dots from './Components/Dots';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const tutorial = [
    { picture: require("../../../assets/images/WalkThrough-Tutorial/1.png"), label: "Meu Perfil", title: "Onde posso alterar meus dados?", text: "Voce consegue alterar seus dados clicando no menu no canto superior direito da tela e em 'Meu Perfil'", color: "#FFCF6E"},
    { picture: require("../../../assets/images/WalkThrough-Tutorial/2.png"), label: "Notificações", title: "Onde posso ser notificado?", text: "Você pode ser notificado clicando em cima de uma padaria, mais informações e clicar em 'Ativar Notificações'.", color: "#FFCF6E"},
    { picture: require("../../../assets/images/WalkThrough-Tutorial/3.png"), label: "Home", title: "Padarias Favoritas", text: "Você pode ser notificado clicando em cima de uma padaria, mais informações e clicar no botão com uma estrela no meio para favoritar uma padaria.", color: "#FFCF6E", },
    { picture: require("../../../assets/images/WalkThrough-Tutorial/4.png"), label: "Encontrar Padarias", title: "Como eu busco uma padaria?", text: "Você pode encontrar padarias buscando por nome ou clicando sobre uma que aparecer no seu mapa!", color: "#FFCF6E"},
    { picture: require("../../../assets/images/WalkThrough-Tutorial/5.png"), label: "Ainda tenho dúvidas", title: "Sem problemas", text: "Você pode acessar esse tutorial quantas vezes quiser, basta ir no seu perfil e clicar em 'Ajuda'.", color: "#FFCF6E", icon: <Feather name="help-circle" size={20} /> },
]
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        width: width
    },
    slider: {
        flex: 1,
        borderBottomRightRadius: 75,
        height: SLIDE_HEIGHT,
        alignContent: "center"
    },
    footer: {
        flex: 1,
        backgroundColor: "white",
    },
    footerContent: {
    },
    pagination: {
        width: "25%",
        backgroundColor: "grey",
        position: "absolute",
        right: 90,
        bottom: 50,
        height: 75,
        borderRadius: 75,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
});

const WalkThroughTutorial = () => {

    const valid = true
    const invalid = false
    const [state, setState] = useState(valid);

    const scroll = useRef<Animated.ScrollView>(null);
    const x = useValue(0);

    const slides = tutorial;
    const onScroll = onScrollEvent({ x });
    useFocusEffect(
        React.useCallback(() => {
          const onBackPress = () => {
            return true;
          };
    
          BackHandler.addEventListener('hardwareBackPress', onBackPress);
    
          return () =>
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [])
      );
    return (
        <Animated.View style={styles.slider}>
            <Animated.ScrollView
                horizontal
                ref={scroll}
                snapToInterval={width}
                decelerationRate={"fast"}
                showsHorizontalScrollIndicator={false}
                bounces={false}
                scrollEventThrottle={1}
                {...{ onScroll }}>

                {slides.map(({ picture }, index) => (
                    <>
                        <Slide key={index}
                            last={(index === slides.length ? true : false)}
                            {...{ picture }} />
                        <View style={{
                            flex: 1,
                            backgroundColor: "#DCDCDC",}}>

                    <View style={styles.pagination}>
                        {slides.map((_, index) => (<Dots key={index} currentIndex={divide(x, width)} {...{ index }} />))}
                    </View>

                        <Subslide key={index+1} onPress={() => {
                                    if (scroll.current) {
                                        scroll.current.getNode().scrollTo({ x: width * (index + 1), animated: true });
                                    }
                                }} last={(index === slides.length - 1 ? true : false)}
                                    onPressSkip={() => {
                                        if (scroll.current) {
                                            scroll.current.getNode().scrollTo({ x: width * slides.length, animated: true });
                                        }
                                    }} />
                        </View>
                    </>
                    
                ))}   
            </Animated.ScrollView>
        </Animated.View>
    )
};

export default WalkThroughTutorial;