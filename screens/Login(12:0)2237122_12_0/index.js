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
        style={styles.ImageBackground_12_1}
      />
      <View style={styles.View_12_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2a8/49da/2acf1957024154bab6ebaf790253c461"
        }}
        style={styles.ImageBackground_12_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8311/6415/c6106da3ec8380438dc2f29006f57c23"
        }}
        style={styles.ImageBackground_12_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3ff/e8ea/74bf55939deace3b30618ddc8740325d"
        }}
        style={styles.ImageBackground_18_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09f7/0c84/8cf3f50eddd9eca4835cf51618ab5cbe"
        }}
        style={styles.ImageBackground_20_0}
      />
      <View style={styles.View_12_5}>
        <Text style={styles.Text_12_5}>10:22</Text>
      </View>
      <View style={styles.View_18_1} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b24/5962/13bf319a745c5b0e62deb74cb1343043"
        }}
        style={styles.ImageBackground_18_0}
      />
      <View style={styles.View_22_0}>
        <Text style={styles.Text_22_0}>sign in</Text>
      </View>
      <View style={styles.View_22_1} />
      <View style={styles.View_22_2} />
      <View style={styles.View_22_3}>
        <Text style={styles.Text_22_3}>forgot password? reset!</Text>
      </View>
      <View style={styles.View_22_4}>
        <Text style={styles.Text_22_4}>email or username</Text>
      </View>
      <View style={styles.View_22_5}>
        <Text style={styles.Text_22_5}>password</Text>
      </View>
      <View style={styles.View_22_6} />
      <View style={styles.View_22_7}>
        <Text style={styles.Text_22_7}>login</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bae/ea28/6363ef5695272a85e06643da6c066c36"
        }}
        style={styles.ImageBackground_22_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0043/a92c/21fd3eb716337f721537395783a03bdc"
        }}
        style={styles.ImageBackground_22_13}
      />
      <View style={styles.View_22_30}>
        <Text style={styles.Text_22_30}>login with</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_12_1: {
    width: wp("4.8%"),
    height: hp("1.092896174863388%"),
    top: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.53333333333333%")
  },
  View_12_2: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    top: hp("42.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_12_3: {
    width: wp("4.533333333333333%"),
    height: hp("1.639344262295082%"),
    top: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.39999999999999%")
  },
  ImageBackground_12_4: {
    width: wp("4.266666666666667%"),
    height: hp("1.7759562841530054%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%")
  },
  ImageBackground_18_4: {
    width: wp("53.333333333333336%"),
    height: hp("27.322404371584703%"),
    top: hp("-13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-19.733333333333334%")
  },
  ImageBackground_20_0: {
    width: wp("50.13333333333333%"),
    height: hp("24.59016393442623%"),
    top: hp("-14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%")
  },
  View_12_5: {
    width: wp("8.533333333333333%"),
    top: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%")
  },
  Text_12_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_1: {
    width: wp("37.86666666666667%"),
    height: hp("16.80327868852459%"),
    top: hp("94.12568306010928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.133333333333326%"),
    backgroundColor: "rgba(135, 242, 163, 1)"
  },
  ImageBackground_18_0: {
    width: wp("75.73333333333333%"),
    height: hp("40.16393442622951%"),
    top: hp("70.76502732240438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.266666666666666%")
  },
  View_22_0: {
    width: wp("34.4%"),
    top: hp("31.010928961748636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.13333333333333%")
  },
  Text_22_0: {
    color: "rgba(68, 141, 87, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_1: {
    width: wp("87.2%"),
    height: hp("7.5136612021857925%"),
    top: hp("40.43715846994536%"),
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
  View_22_2: {
    width: wp("87.2%"),
    height: hp("7.5136612021857925%"),
    top: hp("50.13661202185792%"),
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
  View_22_3: {
    width: wp("50.13333333333333%"),
    top: hp("58.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.199999999999996%")
  },
  Text_22_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_4: {
    width: wp("74.4%"),
    top: hp("42.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333333%")
  },
  Text_22_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_5: {
    width: wp("74.4%"),
    top: hp("52.459016393442624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333333%")
  },
  Text_22_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_6: {
    width: wp("86.66666666666667%"),
    height: hp("8.743169398907105%"),
    top: hp("66.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    backgroundColor: "rgba(22, 165, 59, 1)",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  View_22_7: {
    width: wp("16.53333333333333%"),
    top: hp("68.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.86666666666667%")
  },
  Text_22_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_22_8: {
    width: wp("7.733333333333333%"),
    height: hp("3.6885245901639343%"),
    top: hp("85.79234972677595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.13333333333333%")
  },
  ImageBackground_22_13: {
    width: wp("7.733333333333333%"),
    height: hp("3.6885245901639343%"),
    top: hp("85.79234972677595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.46666666666666%")
  },
  View_22_30: {
    width: wp("36%"),
    top: hp("79.37158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.93333333333334%")
  },
  Text_22_30: {
    color: "rgba(0, 0, 0, 1)",
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
