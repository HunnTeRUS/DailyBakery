import { StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: "#F4EEEE",
    alignItems: "center",
  },

  passwordImage: {
    alignSelf: 'center',
    marginTop: "-5%",
  },

  textContainer: {
    width: "90%",
    alignContent: "center",
    alignItems: "center",
    alignSelf: 'center'
  },
  title: {
    marginTop: 25,
    fontSize: 17,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    flexDirection: "row",
  },

  subtitle: {
    marginTop: "3%",
    marginBottom: "5%",
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    textAlign: "center",
  },

  videoIcon: {
    paddingRight: 5
  },

  option: {
    width: "85%",
    flexDirection: "row",
    height: 55,
    alignSelf: 'center',
    marginTop: "10%",
  },

  iconContainer: {
    height: 55,
    width: 55,
    backgroundColor: "#FEC044",
    borderRadius: 15,
    justifyContent: 'center'
  },

  iconOption: {
    paddingLeft: "5%",
    alignSelf: "center"
  },

  editInfoIcon: {
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
  },

  textCep: {
    marginTop: '15%',
    alignSelf: 'flex-start',
    fontFamily: 'Poppins-Regular',
  },

  inputCep: {
    height: 45,
    color: '#333',
    borderRadius: 10,
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

  textNumber: {
    marginTop: '10%',
    alignSelf: 'flex-start',
    fontFamily: 'Poppins-Regular',
  },

  inputNumber: {
    height: 45,
    color: '#333',
    borderRadius: 10,
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

  nextButton: {
    backgroundColor: '#FEC044',
    borderRadius: 6,
    height: 40,
    width: '55%',
    marginTop: "10%",
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },

  nextText: {
    color: '#FFF',
    fontSize: 15, 
    fontWeight: 'bold'
  },

  input: {
    width: 300
  }, 

  containerInput: {
    width: "80%",
    marginTop: "-7%",
    alignSelf: "center"
  },

  keyboardView: {
      justifyContent: "center",
      alignItems: "center",
  }
})
