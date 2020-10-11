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
  }
})
