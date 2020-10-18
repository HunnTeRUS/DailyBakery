import React, { useRef, useState } from "react";
import { View, ScrollView, StyleSheet, Dimensions, AsyncStorage, Text, BackHandler } from "react-native";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import Animated, { multiply, divide, Value } from "react-native-reanimated";
import { onScrollEvent, useValue } from "react-native-redash";
import Subslide from "./Subslide";
import Dots from './Components/Dots';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";

const { width } = Dimensions.get("window");


const Apresentacao = [
    { picture: require("../../../assets/images/WalkThrough-Presentation/1.png"), label: "Daily Bakery", text: "Este app tem o intuito de tornar a sua vida de apaixonado por pães quentinhos ainda melhor, informando quando tem pão quentinho nas padarias proximas a você!.", color: "#FFCF6E" },
    { picture: require("../../../assets/images/WalkThrough-Presentation/2.png"), label: "Notificações em tempo real", text: "Você pode pedir para ser notificado quando sair novas fornadas nas padarias proximas a você!", color: "#FFCF6E" },
    { picture: require("../../../assets/images/WalkThrough-Presentation/3.png"), label: "Favoritos", text: "Para você não precisar ficar procurando padarias no mapa, você pode adicionar a sua favorita na lista para sempre ser notificado por ela!", color: "#FFCF6E" },
    { picture: require("../../../assets/images/WalkThrough-Presentation/4.png"), label: "Mapa", text: "Você verá um mapa, mostrando todas as padarias cadastradas no app num raio de 10KM da sua localização!", color: "#FFCF6E" },
    { picture: require("../../../assets/images/WalkThrough-Presentation/5.png"), label: "Comece agora", text: "Para começar basta clicar no botão abaixo e seja bem vindo ao DailyBakery!", color: "#FFCF6E" },
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DCDCDC",
    },
    slider: {
        borderBottomRightRadius: 75,
        height: SLIDE_HEIGHT,
        alignContent: "center"
    },
    footer: {
        flex: 1,
        backgroundColor: "white",
    },
    footerContent: {
        flex: 1,
        backgroundColor: "#DCDCDC",
        borderTopLeftRadius: 75,
    },
    pagination: {
        ...StyleSheet.absoluteFillObject,
        height: 75,
        borderRadius: 75,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
});

const WalkThrough = () => {

    const valid = true
    const invalid = false
    const [state, setState] = useState(valid);

    const scroll = useRef<Animated.ScrollView>(null);
    const x = useValue(0);

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
    
    async function WalkthroughOrHome() {
        var variavel = await AsyncStorage.getItem('firstAccess');
        if (variavel === 'false') {
            setState(invalid);
            return;
        } else if (variavel === null || variavel === undefined) {
            setState(valid);
            return;
        } else {
            return;
        }

    }
    async () =>
    await WalkthroughOrHome()

    const slides = Apresentacao;
    //const slides = state ? Apresentacao : tutorial;
    const onScroll = onScrollEvent({ x });
    return (
        <View style={styles.container}>
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
                        <Slide key={index}
                            last={(index === slides.length ? true : false)}
                            {...{ picture }} />
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{ ...StyleSheet.absoluteFillObject, borderTopLeftRadius: 75, backgroundColor: "#DCDCDC" }} />

                <View style={[styles.footerContent]}>
                    <View style={styles.pagination}>
                        {slides.map((_, index) => (<Dots key={index} currentIndex={divide(x, width)} {...{ index }} />))}
                    </View>
                    <Animated.View style={
                        { flexDirection: "row", width: width * slides.length, flex: 1, transform: [{ translateX: multiply(x, -1) }] }
                    }>
                        {slides.map(({ text }, index) => (
                            <Subslide key={index} onPress={() => {
                                if (scroll.current) {
                                    scroll.current.getNode().scrollTo({ x: width * (index + 1), animated: true });
                                }
                            }} last={(index === slides.length - 1 ? true : false)} {...{ text }}
                                onPressSkip={() => {
                                    if (scroll.current) {
                                        scroll.current.getNode().scrollTo({ x: width * slides.length, animated: true });
                                    }
                                }} />
                        ))}
                    </Animated.View>
                </View>
            </View>
        </View>
    )
};

export default WalkThrough;