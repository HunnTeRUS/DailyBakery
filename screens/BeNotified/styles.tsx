import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F4EEEE",
      display: 'flex',
      alignContent: 'center',
      justifyContent: "center"
    },

    secondContainer: {
      height: '95%',
      width: '80%',
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      backgroundColor: "#F4EEEE",
      justifyContent: "center"
    },

    imageHeader:{
      width: 170,
      alignSelf: "flex-start"
    },

    ultimaFornadaTextLabel: {
      fontWeight: 'bold',
      color: '#FEC044',
    },

    benotifiedIcon: {
      alignSelf: "center",
      width: "100%"
    },

    title: {
      fontSize: 17,
      color: '#4A4040',
      textAlign: 'center',
      marginBottom: "10%",
      fontFamily: 'Poppins-Bold',
    },

    subTitle: {
      fontSize: 15,
      marginTop: '15%',
      color: '#BAA6A6',
      textAlign: 'center',
      fontFamily: 'Poppins-Regular',
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
      marginTop: "15%"
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