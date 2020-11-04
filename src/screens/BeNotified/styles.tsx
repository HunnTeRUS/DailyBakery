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
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: "#FEC044",
    justifyContent: "flex-start",
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
    flexDirection: "column"
  },

  textContainer: {
    marginTop: "10%",
    width: "90%"
  },

  benotifiedIcon: {
    alignSelf: "center",
    width: "100%",
    height: "45%",
    alignItems: "center",
    justifyContent: 'center'
  },

  title: {
    fontSize: 25,
    color: 'white',
    alignSelf: "center",
    marginBottom: "6%",
    fontFamily: 'Poppins-Bold',
  },

  subTitle: {
    fontSize: 17,
    marginTop: '10%',
    color: 'white',
    alignSelf: "center",
    textAlign: "left",
    fontFamily: 'Poppins-Regular',
  },

  nextButton: {
    backgroundColor: 'white',
    borderRadius: 6,
    height: 45,
    width: 250,
    marginTop: "15%",
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: "row"
  },

  nextText: {
    color: '#f46b45',
    fontSize: 15,
    fontFamily: "Poppins-Bold",
  },

  buttonContainer:{
  },

})