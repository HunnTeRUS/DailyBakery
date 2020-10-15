import {Dimensions, StyleSheet} from 'react-native'

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: "#F4EEEE",
        alignItems: "center",
    },

    secondContainer: {
        backgroundColor: '#FEC044',
        height: '30%',
        width: '100%',
    },

    profileText: {
        color: "white",
        alignSelf: "center",
        fontFamily: "Poppins-Bold",
        fontSize: 20,
        marginTop: "5%"
    },

    profileIcon:{
        alignSelf: "center",
        marginTop: "8 %",
    },

    userInfoContainer:{
        width: "90%",
        alignSelf: "center",
        backgroundColor: "white",
        height: "100%",
        marginTop: "5%",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 5,
    },

    name: {
        fontFamily: "Poppins-Bold",
        alignSelf: "center",
        paddingTop: '5%',
        fontSize: 17
    },

    email: {
        fontFamily: "Poppins-Regular",
        alignSelf: "center",
    },
    
    option: {
        width: "90%",
        flexDirection: "row",
        height: 55,
        alignSelf: 'center',
        marginTop: "10%",
    },

    iconContainer:{
        height: 55,
        width: 55,
        backgroundColor: "#FEC044",
        borderRadius: 25,
        justifyContent: 'center'
    },

    iconOption:{
        paddingLeft: "5%",
        alignSelf: "center"
    },

    editInfoIcon:{
        alignSelf: "flex-end",
        paddingRight: "4%",
        paddingTop: "4%"
    },

    textOption: {
        color: "#696969",
        paddingLeft: "7%",
        alignSelf: 'center',
        fontFamily: "Poppins-Bold",
        fontSize: 15,
    }
})
