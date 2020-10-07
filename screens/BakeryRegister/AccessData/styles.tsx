import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4EEEE",
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        
    },

    secondContainer: {
        height: '90%',
        width: '80%',
        alignSelf: 'center',
        display: 'flex',
        backgroundColor: "#F4EEEE",
        paddingBottom: "20%",
    },
    title: {
        fontSize: 17,
        color: '#4A4040',
        textAlign: 'center',
        marginTop: '10%',
        fontFamily: 'Poppins-Bold',
    },

    thirdContainer: {
        height: '80%',
    },

    subTitle: {
        fontSize: 14,
        marginTop: '3%',
        color: '#BAA6A6',
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
        marginBottom: '2%'
    },
    text: {
        alignItems: "baseline",
        fontFamily: "Poppins-Bold",
        marginBottom: '1%',
        marginTop: '5%',
    },
    field: {
        padding: '3%',
        width: width,
    },
    nextButton: {
        backgroundColor: '#FEC044',
        borderRadius: 6,
        height: 40,
        width: '55%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: '20%'
      },

      nextText: {
        color: '#FFF',
        fontSize: 15, 
        fontWeight: 'bold'
      }     

});