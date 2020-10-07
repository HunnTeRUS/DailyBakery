import {Dimensions, StyleSheet} from 'react-native'

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: "#F4EEEE",
        alignItems: "center",
    },
    text: {
        marginTop: 25,
        marginBottom: 5,
        marginLeft: 10,        
        fontSize: 15,
        fontFamily: "Poppins-Regular",
        textAlign: "center",
        flexDirection: "row",
    },
    inputs: {
        margin: 4,
        padding: 6,
        alignItems: "baseline",
        width: '70%',
        alignSelf: 'center',
        marginBottom: 35
    },
    image: {
        alignSelf: "center",
        marginTop: height / 10,
        height: "28%",
    },
    infos: {
        fontSize: 16,
        marginTop: '5%',
        color: '#BAA6A6',
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
    },
    title: {      
        fontSize: 18,
        marginTop: '5%',
        fontFamily: "Poppins-Bold",
        textAlign: "center",
        flexDirection: "row",
    },
    nextButton: {
        backgroundColor: '#FEC044',
        borderRadius: 6,
        height: 45,
        width: 150,
        marginTop: '1%',
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
