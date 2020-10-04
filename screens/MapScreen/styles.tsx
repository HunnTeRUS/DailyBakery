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
        width: 160
    },
    bakeryName: {
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'center'
    },
    opened: {
        color: 'green',
        marginTop: 5,
        alignSelf: 'center'
    }
})