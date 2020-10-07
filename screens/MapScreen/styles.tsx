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
    },

    searchForm: {
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: "row"
    },

    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: "#FFF",
        color: "#333",
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 2,
    },
    loadButton: {
        width: 50,
        height: 50,
        backgroundColor: "#FEC044",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 15
    }
})