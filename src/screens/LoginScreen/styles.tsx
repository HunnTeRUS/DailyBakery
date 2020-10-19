import {StyleSheet, Dimensions} from 'react-native'

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        width: "100%",
        height: "80%",
        backgroundColor: "#F4EEEE",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
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
        marginTop: "-10%",
        width: '70%',
        alignSelf: 'center',
    },
    image: {
        position: "relative",
        top: 0,
        height: 250,
        alignSelf: "center"
    },
    divLinks: {
        backgroundColor: "#F4EEEE",
        alignItems: 'center',
        height: "20%"
    },
    nextButton: {
        backgroundColor: 'white',
        borderRadius: 6,
        height: 45,
        width: 150,
        marginTop: "10%",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    nextText: {
        color: '#f46b45',
        fontSize: 15,
        fontWeight: 'bold'
    },

})
