import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ff6678",
      display: 'flex',
      justifyContent: 'flex-end',
      alignContent: 'center',
      alignItems: "center",
      flexDirection: "column",
    },

    secondContainer: {
      height: '65%',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      width: '100%',
      alignSelf: 'center',
      backgroundColor: "white",
    },
    
    cookImage:{
      paddingBottom: "3%"
    },

    infoContainer: {
      width: "85%",
      marginTop: "8%",
      height: "25%",
      alignSelf: "center",
    },

    openedIcon:{ 
      width: "30%",
      height: "100%",
      alignSelf: "flex-start",
      alignItems: "center",
      justifyContent: "center"
    },

    infoMainText:{
      fontFamily: "Poppins-Bold",
      fontSize: 17
    },

    otherTexts:{
      fontFamily: "Poppins-Regular",
      marginTop: "1%",
      fontSize: 15
    },

    beNotifiedContainer: {
      width: "85%",
      marginTop: "5%",
      height: 100,
      alignSelf: "center",
      backgroundColor: "#F6F6F6",
      flexDirection: "row",
      borderRadius: 15,
      zIndex: 1
    },

    notificationIconContainer: {
      backgroundColor: "#FFBD59",
      borderTopLeftRadius: 15,
      borderBottomLeftRadius: 15,
      width: '30%',
      height: "100%",
      zIndex: -1,
      alignSelf: "flex-start",
      alignItems: "center",
      justifyContent: "center"
    },

    notificationTextContainer: {
      flex: 1,
      marginLeft: "5%"
    },

    notificationAlertText:{
      fontFamily: "Poppins-Regular",
      color: "black",
      marginTop: "5%",

    },

    notificationInfoText:{
      fontFamily: "Poppins-ExtraLight",
      color: "black"
    },

    arrow:{
      alignSelf: "flex-end",
      position: "absolute",
      bottom: 3,
      right: 10
    },

    fornadaContainer: {
      width: "85%",
      marginTop: "5%",
      height: "25%",
      alignSelf: "center",
      backgroundColor: "#F6F6F6",
      flexDirection: "row",
      borderRadius: 15,
      zIndex: 1001
    },

    fornadaIconContainer: {
      backgroundColor: "#ff6678",
      borderTopLeftRadius: 15,
      borderBottomLeftRadius: 15,
      width: '30%',
      height: "100%",
      zIndex: -1,
      alignSelf: "flex-start",
      alignItems: "center",
      justifyContent: "center"
    },

})