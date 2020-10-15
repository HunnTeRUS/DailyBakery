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
      height: '90%',
      width: '80%',
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      backgroundColor: "#F4EEEE",
    },

    transparentBakerIcon:{
      height: 100,
      width: 100
    },

    title: {
      fontSize: 17,
      color: '#4A4040',
      textAlign: 'center',
      marginTop: '15%',
      fontFamily: 'Poppins-Regular',
    },

    opened: {
      fontSize: 17,
      textAlign: 'center',
      marginTop: '5%',
      fontFamily: 'Poppins-Regular',
      color: "#BAA6A6"
    },

    subTitle: {
      fontSize: 15,
      marginTop: '15%',
      color: '#BAA6A6',
      textAlign: 'center',
      fontFamily: 'Poppins-Regular',
    },

    bellIcon:{
      color: "white",
      paddingBottom: "5%",
      marginTop: "4%"
    },

    bakeryName: {
      fontSize: 17,
      textAlign: 'center',
      marginTop: '5%',
      fontFamily: 'Poppins-Bold',
      color: "#BAA6A6"
    },

    notificationIcon: {
      resizeMode: "contain",
      width: 50,
      height: 50,
      marginTop: 15,
      alignSelf: "center",
    },

    beNotifiedButton: {
      backgroundColor: '#FEC044',
      flexDirection: "column",
      borderRadius: 25,
      height: 110,
      width: 200,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '5%'
    },

    beNotifiedText: {
      color: '#FFF',
      fontSize: 15, 
      fontFamily: "Poppins-Bold",
      alignSelf: "center"
    } ,

    ultimaFornadaTextLabel: {
      fontWeight: 'bold',
      color: '#FEC044',
    },

    viewOfFornadas: {
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'space-between',
      alignSelf: 'center',
      marginTop: 0
    },

    thirdContainer: {
      height: '25%',
      width: '100%',
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      backgroundColor: "#F4EEEE",
    },
  
    viewOfFornadasAux: {
      backgroundColor: '#c7c5c530',
      justifyContent: "flex-end",
      padding: 20,
      width: 200,
      alignSelf: 'center',
      borderRadius: 10,
    },
  
    clockIcon: {
      marginRight: '3%',
      color: '#FEC044',
      alignSelf: 'center'
    },
  
    ultimaFornadaText: {
      textAlign: "center",
      fontFamily: 'Poppins-Regular',
      color: '#939393'
    },
})