import { StyleSheet, Dimensions, Platform } from "react-native";
import Scale from "./Scale";
import scale, { verticalScale } from "./Scale";
import FONTS from "../../blocks/utilities/src/Fonts/Fonts";
import { COLORS } from "../../blocks/utilities/src/Globals";
const screenWidth = Dimensions.get("window").width;
export default StyleSheet.create({
  container: {
    width: "100%",
    height: scale(80),
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.white,
    // borderTopLeftRadius: scale(20),
    //borderTopRightRadius: scale(20),
    shadowColor: "#BFD3E6",

    shadowOffset: { width: 0, height: -7 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderWidth: 0,
    elevation: 4

    //paddingBottom:Platform.OS =="ios"?Scale(8):Scale(0)
  },
  shadowProp: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4
  },
  outerContainer: {
    width: scale(375),
    height: scale(76),
    flex: 1,
    paddingTop: scale(14)

    //paddingVertical: scale(10),
  },
  tabContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: Platform.OS == "ios" ? scale(45) : scale(64),
    borderRadius: scale(16)
  },
  labelStyle: {
    fontSize: scale(11),
    lineHeight: scale(16.5),
    color: "#FF6347",
    marginTop: verticalScale(0)
  },
  homeIcons: {
    width: scale(34),
    height: scale(38)
  },
  icontext: {
    marginTop: Scale(8),
    fontSize: Scale(10)
  },
  cartIcons: {
    width: scale(15),
    height: scale(17)
  },
  mainIcon: {
    width: scale(40),
    height: scale(30),
    marginTop: scale(-4)
  },
  exploreIcons: {
    width: scale(34),
    height: scale(38)
  },
  liveIcons: {
    width: scale(34),
    height: scale(38)
  },

  sleepIcons: {
    width: scale(34),
    height: scale(38)
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5
  },
  tooltipView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  logo: {
    height: Scale(30),
    width: Scale(30),
    resizeMode: "contain"
  }
});
