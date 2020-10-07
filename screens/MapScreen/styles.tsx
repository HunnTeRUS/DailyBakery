import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    mapView: {
        flex: 1
    },
    imageHeader:{
        width: 170,
        position: "absolute"
    },
    markerImage:{
        width: 54,
        height: 54,
        borderRadius: 6,
        borderWidth: 4,
        borderColor: "#FFF"
    },
    callout: {
        width: 260,
    },
    bakeryName: {
        fontFamily: 'Poppins-Bold',
        alignSelf: 'center',
    },
    info: {
        color: "#666",
        marginTop: 5,
        alignSelf: "center",
        fontFamily: 'Poppins-Regular',
        marginRight: 5
    },
    opened: {
        color: 'green',
        marginTop: 5,
        fontFamily: 'Poppins-Bold',
        alignSelf: 'center'
    },
    seeMoreView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    arrowRightIcon: {
    }
})