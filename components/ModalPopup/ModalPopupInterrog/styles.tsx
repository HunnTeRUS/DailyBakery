import {StyleSheet} from 'react-native'

export default StyleSheet.create({   
    
    container: {
        flex: 1,
        backgroundColor: '#000000aa',
        justifyContent: 'center',
    },

    subcontainer: {
        backgroundColor: '#ffffff',
        margin: 30,
        alignSelf: "center",
        padding: 40,
        maxWidth: 350,
        borderRadius: 10,
    },

    imageContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'flex-start',
        marginTop: '-20%'
    },

    image: {
        alignSelf: 'flex-start'
    },

    title: {
        fontSize: 17,
        color: '#4A4040',
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
    },

    textContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: '-10%',
        width: '100%',
    },

    subtitle: {
        fontSize: 14,
        color: '#BAA6A6',
        fontFamily: 'Poppins-Regular',
        textAlign: 'center'
    },

    buttonContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between'
    },

    noButton: {
        backgroundColor: 'red',
        borderRadius: 6,
        height: 40,
        width: '45%',
        alignItems: 'center',
        alignSelf: 'flex-start',
        justifyContent: 'center',
      },

     noText: {
        color: '#FFF',
        fontSize: 15, 
        fontWeight: 'bold'
    },
    
    yesButton: {
        backgroundColor: 'green',
        borderRadius: 6,
        height: 40,
        width: '45%',
        alignItems: 'center',
        alignSelf: 'flex-end',
        justifyContent: 'center',
      },

    yesText: {
        color: '#FFF',
        fontSize: 15, 
        fontWeight: 'bold'
      }    
    

});