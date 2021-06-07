import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/811c/9879/b1a9ae8476b2d5ef2d477af8a7258d00"
        }}
        style={styles.ImageBackground_23_1}
      />
      <View style={styles.View_23_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2a8/49da/2acf1957024154bab6ebaf790253c461"
        }}
        style={styles.ImageBackground_23_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8311/6415/c6106da3ec8380438dc2f29006f57c23"
        }}
        style={styles.ImageBackground_23_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3ff/e8ea/74bf55939deace3b30618ddc8740325d"
        }}
        style={styles.ImageBackground_23_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09f7/0c84/8cf3f50eddd9eca4835cf51618ab5cbe"
        }}
        style={styles.ImageBackground_23_6}
      />
      <View style={styles.View_23_7}>
        <Text style={styles.Text_23_7}>10:22</Text>
      </View>
      <View style={styles.View_23_8} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b24/5962/13bf319a745c5b0e62deb74cb1343043"
        }}
        style={styles.ImageBackground_23_9}
      />
      <View style={styles.View_23_10}>
        <Text style={styles.Text_23_10}>register</Text>
      </View>
      <View style={styles.View_23_11} />
      <View style={styles.View_23_12} />
      <View style={styles.View_23_14}>
        <Text style={styles.Text_23_14}>email or username</Text>
      </View>
      <View style={styles.View_23_15}>
        <Text style={styles.Text_23_15}>password</Text>
      </View>
      <View style={styles.View_23_26} />
      <View style={styles.View_23_27} />
      <View style={styles.View_23_28} />
      <View style={styles.View_23_29}>
        <Text style={styles.Text_23_29}>confirm password</Text>
      </View>
      <View style={styles.View_23_30}>
        <Text style={styles.Text_23_30}>telephone</Text>
      </View>
      <View style={styles.View_24_0} />
      <View style={styles.View_24_1}>
        <Text style={styles.Text_24_1}>sign up</Text>
      </View>
      <View style={styles.View_24_2}>
        <Text style={styles.Text_24_2}>
          already have an account? login here!
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_23_1: {
    width: wp("4.8%"),
    height: hp("1.092896174863388%"),
    top: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.53333333333333%")
  },
  View_23_2: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    top: hp("34.15300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_3: {
    width: wp("4.533333333333333%"),
    height: hp("1.639344262295082%"),
    top: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.39999999999999%")
  },
  ImageBackground_23_4: {
    width: wp("4.266666666666667%"),
    height: hp("1.7759562841530054%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%")
  },
  ImageBackground_23_5: {
    width: wp("53.333333333333336%"),
    height: hp("27.322404371584703%"),
    top: hp("-13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-19.733333333333334%")
  },
  ImageBackground_23_6: {
    width: wp("50.13333333333333%"),
    height: hp("24.59016393442623%"),
    top: hp("-14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%")
  },
  View_23_7: {
    width: wp("8.533333333333333%"),
    top: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%")
  },
  Text_23_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_8: {
    width: wp("37.86666666666667%"),
    height: hp("16.80327868852459%"),
    top: hp("94.12568306010928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.133333333333326%"),
    backgroundColor: "rgba(135, 242, 163, 1)"
  },
  ImageBackground_23_9: {
    width: wp("75.73333333333333%"),
    height: hp("40.16393442622951%"),
    top: hp("70.76502732240438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.266666666666666%")
  },
  View_23_10: {
    width: wp("34.4%"),
    top: hp("22.950819672131146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.13333333333333%")
  },
  Text_23_10: {
    color: "rgba(68, 141, 87, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_11: {
    width: wp("87.2%"),
    height: hp("7.5136612021857925%"),
    top: hp("32.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    backgroundColor: "rgba(215, 213, 213, 1)",
    opacity: 0.8700000047683716,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_23_12: {
    width: wp("87.2%"),
    height: hp("7.5136612021857925%"),
    top: hp("42.07650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    backgroundColor: "rgba(211, 207, 207, 1)",
    opacity: 0.8700000047683716,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_23_14: {
    width: wp("74.4%"),
    top: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333333%")
  },
  Text_23_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_15: {
    width: wp("74.4%"),
    top: hp("44.39890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333333%")
  },
  Text_23_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_26: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    top: hp("53.41530054644809%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_23_27: {
    width: wp("87.2%"),
    height: hp("7.5136612021857925%"),
    top: hp("51.63934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    backgroundColor: "rgba(215, 213, 213, 1)",
    opacity: 0.8700000047683716,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_23_28: {
    width: wp("87.2%"),
    height: hp("7.5136612021857925%"),
    top: hp("61.338797814207645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    backgroundColor: "rgba(211, 207, 207, 1)",
    opacity: 0.8700000047683716,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_23_29: {
    width: wp("74.4%"),
    top: hp("53.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333333%")
  },
  Text_23_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_30: {
    width: wp("74.4%"),
    top: hp("63.661202185792355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333333%")
  },
  Text_23_30: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_0: {
    width: wp("87.2%"),
    height: hp("8.879781420765028%"),
    top: hp("73.224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    backgroundColor: "rgba(22, 165, 59, 1)",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  View_24_1: {
    width: wp("56.53333333333334%"),
    top: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.13333333333333%")
  },
  Text_24_1: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_2: {
    width: wp("71.73333333333333%"),
    top: hp("84.15300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.8%")
  },
  Text_24_2: {
    color: "rgba(68, 141, 87, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
