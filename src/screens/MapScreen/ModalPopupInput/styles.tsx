import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000000aa',
        justifyContent: 'center',
    },

    subcontainer: {
        margin: 50,
        padding: 30,
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
        marginBottom: 10,
        fontSize: 17,
        color: 'white',
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

    titleError: {
        fontSize: 14,
        color: '#BAA6A6',
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
    },

    textContainerError: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: '-5%',
        width: '100%',
        marginBottom: '5%'
    },

    subtitle: {
        fontSize: 14,
        color: 'white',
        fontFamily: 'Poppins-Regular',
        textAlign: 'center'
    },

    buttonContainer: {
        alignItems: 'center',
    },

    nextButton: {
        backgroundColor: '#FEC044',
        borderRadius: 6,
        height: 40,
        width: '55%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },

    closeButton: {
        borderRadius: 6,
        height: 40,
        width: '55%',
        marginTop: "5%",
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },

    nextText: {
        color: '#FFF',
        fontSize: 15,
        fontFamily: "Poppins-Bold",
    },

    closeText: {
        color: 'white',
        fontFamily: "Poppins-Bold",
        fontSize: 15,
    },

    inputNumber: {
        height: 45,
        color: '#333',
        borderRadius: 10,
        marginTop: '5%',
        backgroundColor: 'white',
        width: '100%',
        fontFamily: 'Poppins-Regular',
        shadowColor: '#000',
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 2,
        paddingHorizontal: 10
    },


});