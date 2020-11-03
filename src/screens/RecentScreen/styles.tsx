import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native'

const { width } = Dimensions.get("window");

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
  
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    alignSelf: "center",
    flex: 1
  },

  textHeader: {
    width: '60%',
    alignItems: "center",
    marginLeft: "4%",
    justifyContent: "center"
  },

  starIcon:{
    marginLeft: 10
  },

  secondContainer: {
    borderTopColor: "#FEC044",
    borderTopWidth: 5,
    height: '85%',
    width: '100%',
    alignSelf: 'center',
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },

  addedDeletedBakeryView:{
    width: "90%",
    marginTop: "5%",
    height: 130,
    backgroundColor: "#F6F6F6",
    alignSelf: "center",
    borderRadius: 15,
    zIndex: 1001,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  addedDeletedIconContainer: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    width: '35%',
    height: "100%",
    paddingTop: '2%',
    zIndex: -1,
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center"
  },

  addedDeletedTextContainer: {
    flex: 1,
    paddingHorizontal: 5,
    justifyContent: "center"
  },

  addedDeletedTitleText:{
    fontFamily: "Poppins-Bold",
    textAlign: "center"
  },

  addedDeletedSubTitleText: {
    fontFamily: "Poppins-Regular",
    textAlign: "center",
    color: '#808080'
  },

  searchForm: {
    zIndex: 5,
    marginBottom: "5%",
    flexDirection: "row"
  },

  searchInput: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFF",
    color: "#333",
    borderRadius: 15,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: "#FEC044",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15
  },

  listItemContainer: {
    width: width / 1.1,
    height: width / 4,
    marginTop: "5%",
    backgroundColor:"#d3d3d3",
    borderRadius: 15,
    justifyContent: 'center'
  },

  container1: {
    marginTop: 5,
  },

  scrollView: {
    width: width,
    flex: 1,
    marginHorizontal: 20,
  },

  bakerImage: {
    width: 80,
    height: 80
  },

  beNotifiedContainer: {
    width: "90%",
    marginTop: "5%",
    height: 100,
    alignSelf: "center",
    backgroundColor: "#F6F6F6",
    flexDirection: "row",
    borderRadius: 15,
    zIndex: 1001
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
    marginLeft: "5%",
    flexDirection: "column",
    justifyContent: "flex-start"
  },

  loaderContainer: {
    height: "100%",
    flex: 1,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15
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
  },

  controlButtonDelete:{
    alignSelf: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center'
  },

  buttonsContainer: {
    flex: 1,
    paddingBottom: 4,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  },

  controlButtonSee: {
    alignSelf: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
    paddingRight: 5,
    alignItems: 'center'
  },

  controlButtonText: {
    fontFamily: "Poppins-Bold",
    color: "#FEC044",
    fontSize: 16
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

  notFoundContainer:{
    alignSelf: "center",
    alignItems: "center",
    width: "80%",
  },

  notFoundText:{
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    textAlign: 'center'
  }
})