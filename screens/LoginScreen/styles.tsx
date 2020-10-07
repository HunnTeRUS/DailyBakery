import {StyleSheet, Dimensions} from 'react-native'

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: "#F4EEEE",
        alignItems: "center",
    },
    text: {
        marginTop: 25,
        marginBottom: 5,
        marginLeft: 10,
        fontSize: 15,
        fontFamily: "Poppins-Bold",
        textAlign: "center",
        flexDirection: "row",
    },
    inputs: {
        margin: 4,
        alignItems: "baseline",
        width: '70%',
        alignSelf: 'center',
    },
    image: {
        marginTop: height / 8,
        height: "30%",
    },
    divLinks: {
        flexDirection: "column",
        textAlign: "center",
        alignContent: "center",
        textDecorationLine: "none",
        marginTop: 40,
        alignItems: 'center',
    },
    nextButton: {
        backgroundColor: '#FEC044',
        borderRadius: 6,
        height: 45,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    nextText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    },

})
