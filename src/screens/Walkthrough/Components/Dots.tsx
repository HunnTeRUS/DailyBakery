import React from 'react';
import Animated, { interpolate, Extrapolate } from 'react-native-reanimated';

interface DotsProps{
    index:number,
    currentIndex: Animated.Node<number>,
}

const Dots = ({index, currentIndex}: DotsProps) => {
    const opacity = interpolate(currentIndex, {
        inputRange:[index -1, index, index + 1],
        outputRange: [0.5, 1, 0.5],
        extrapolate: Extrapolate.CLAMP,
    });

    const scale = interpolate(currentIndex, {
        inputRange:[index -1, index, index + 1],
        outputRange: [1, 1.25, 1],
        extrapolate: Extrapolate.CLAMP,
    })
    return(
        <Animated.View style={{
            opacity,
            backgroundColor: "#ffbd59",
            borderRadius: 4,
            height: 8,
            width: 8,
            margin: 4,
            transform: [{scale}],
    }}/>
    )
}

export default Dots;