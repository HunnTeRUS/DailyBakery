import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F4EEEE",
      display: 'flex',
      justifyContent: 'flex-end',
      alignContent: 'center',
      flexDirection: "column",
    },

    secondContainer: {
      height: '99%',
      width: '90%',
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      backgroundColor: "#F4EEEE",
    },

    contactContainer:{
      width: "97%",
      alignSelf: "center"
    },

    numbersContainer:{
      alignSelf: "center",
      marginTop: "3%"
    },

    telContainer:{
      flexDirection: "row",
      alignSelf: "center"
    },

    locationContainer: {
      width: "97%",
      alignSelf: "center"
    },

    locationTitleContainer: {
      marginTop: "10%",
      flexDirection: "row",
      justifyContent: 'center',
      alignItems: "center",
      alignSelf: "center"
    },

    locationInfoContainer: {
      flexDirection: "column",
    },

    locationInfoContainerAux1:{
      marginTop: "4%",
      flexDirection: "row",
      justifyContent: "space-between"
    },

    locationInfoContainerAux2:{
      marginTop: "4%",
      flexDirection: "row",
    },

    subContainer1:{
      width: "50%",
    },

    streetName: {
      fontSize: 15,
      color: '#4A4040',
      marginTop: "5%",
      alignSelf: "center",
      fontFamily: 'Poppins-Regular',
    },

    telTitle:{
      fontSize: 17,
      color: '#BAA6A6',
      fontFamily: 'Poppins-Bold',
    },

    contactTitle: {
      fontSize: 17,
      color: '#FEC044',
      paddingLeft: "4%",
      fontFamily: 'Poppins-Bold',
    },

    contactImage: {
      width: 300,
      resizeMode: 'contain',
      height: 150
    },

    notificationIcon: {
      resizeMode: "contain",
      width: 50,
      height: 50,
      alignSelf: "center",
    },

    transparentBakerIcon:{
      height: 100,
      width: 100
    },

    title: {
      fontSize: 17,
      color: '#4A4040',
      textAlign: 'center',
      marginBottom: "5%",
      fontFamily: 'Poppins-Bold',
    },

    subTitle: {
      fontSize: 15,
      marginTop: '15%',
      color: '#BAA6A6',
      textAlign: 'center',
      fontFamily: 'Poppins-Regular',
    },

    bakeryName: {
      fontSize: 17,
      textAlign: 'center',
      marginTop: '5%',
      fontFamily: 'Poppins-Bold',
      color: "#BAA6A6"
    },

    beNotifiedButton: {
      backgroundColor: '#505050',
      flexDirection: "row",
      borderRadius: 6,
      height: 40,
      width: "70%",
      alignSelf: "center",
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '5%'
    },

    beNotifiedText: {
      color: '#FFF',
      fontSize: 15, 
      paddingLeft: "3%",
      fontWeight: 'bold',
      alignSelf: 'center'
    } ,

})