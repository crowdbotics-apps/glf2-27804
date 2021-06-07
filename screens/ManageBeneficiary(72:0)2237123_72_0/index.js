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
        style={styles.ImageBackground_72_1}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2a8/49da/2acf1957024154bab6ebaf790253c461"
        }}
        style={styles.ImageBackground_72_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8311/6415/c6106da3ec8380438dc2f29006f57c23"
        }}
        style={styles.ImageBackground_72_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3ff/e8ea/74bf55939deace3b30618ddc8740325d"
        }}
        style={styles.ImageBackground_72_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09f7/0c84/8cf3f50eddd9eca4835cf51618ab5cbe"
        }}
        style={styles.ImageBackground_72_6}
      />
      <View style={styles.View_72_7}>
        <Text style={styles.Text_72_7}>10:22</Text>
      </View>
      <View style={styles.View_72_8} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b24/5962/13bf319a745c5b0e62deb74cb1343043"
        }}
        style={styles.ImageBackground_72_9}
      />
      <View style={styles.View_72_10}>
        <Text style={styles.Text_72_10}>add beneficiary</Text>
      </View>
      <View style={styles.View_72_26} />
      <View style={styles.View_72_27} />
      <View style={styles.View_72_28} />
      <View style={styles.View_72_29} />
      <View style={styles.View_72_30}>
        <Text style={styles.Text_72_30}>account number</Text>
      </View>
      <View style={styles.View_72_33}>
        <Text style={styles.Text_72_33}>remarks</Text>
      </View>
      <View style={styles.View_72_31}>
        <Text style={styles.Text_72_31}>beneficiary name</Text>
      </View>
      <View style={styles.View_72_32}>
        <Text style={styles.Text_72_32}>account nickname</Text>
      </View>
      <View style={styles.View_72_34} />
      <View style={styles.View_72_36}>
        <Text style={styles.Text_72_36}>
          By checking this box, i confirm all information is correct
        </Text>
      </View>
      <View style={styles.View_72_37} />
      <View style={styles.View_72_39}>
        <Text style={styles.Text_72_39}>save beneficiary</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_72_1: {
    width: wp("4.8%"),
    height: hp("1.092896174863388%"),
    top: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.53333333333333%")
  },
  ImageBackground_72_3: {
    width: wp("4.533333333333333%"),
    height: hp("1.639344262295082%"),
    top: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.39999999999999%")
  },
  ImageBackground_72_4: {
    width: wp("4.266666666666667%"),
    height: hp("1.7759562841530054%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%")
  },
  ImageBackground_72_5: {
    width: wp("53.333333333333336%"),
    height: hp("27.322404371584703%"),
    top: hp("-13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-19.733333333333334%")
  },
  ImageBackground_72_6: {
    width: wp("50.13333333333333%"),
    height: hp("24.59016393442623%"),
    top: hp("-14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%")
  },
  View_72_7: {
    width: wp("8.533333333333333%"),
    top: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%")
  },
  Text_72_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_8: {
    width: wp("37.86666666666667%"),
    height: hp("16.80327868852459%"),
    top: hp("94.12568306010928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.133333333333326%"),
    backgroundColor: "rgba(135, 242, 163, 1)"
  },
  ImageBackground_72_9: {
    width: wp("75.73333333333333%"),
    height: hp("40.16393442622951%"),
    top: hp("70.76502732240438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.266666666666666%")
  },
  View_72_10: {
    width: wp("72.26666666666667%"),
    top: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.400000000000002%")
  },
  Text_72_10: {
    color: "rgba(68, 141, 87, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_26: {
    width: wp("87.2%"),
    height: hp("7.5136612021857925%"),
    top: hp("28.415300546448087%"),
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
  View_72_27: {
    width: wp("87.2%"),
    height: hp("7.5136612021857925%"),
    top: hp("38.3879781420765%"),
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
  View_72_28: {
    width: wp("87.2%"),
    height: hp("7.5136612021857925%"),
    top: hp("48.63387978142077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    backgroundColor: "rgba(215, 213, 213, 1)",
    opacity: 0.8700000047683716,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_72_29: {
    width: wp("87.2%"),
    height: hp("7.5136612021857925%"),
    top: hp("59.56284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    backgroundColor: "rgba(215, 213, 213, 1)",
    opacity: 0.8700000047683716,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_72_30: {
    width: wp("74.4%"),
    top: hp("30.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%")
  },
  Text_72_30: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_33: {
    width: wp("74.4%"),
    top: hp("61.338797814207645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%")
  },
  Text_72_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_31: {
    width: wp("74.4%"),
    top: hp("40.7103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%")
  },
  Text_72_31: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_32: {
    width: wp("74.4%"),
    top: hp("50.95628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%")
  },
  Text_72_32: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_34: {
    width: wp("8.799999999999999%"),
    height: hp("3.0054644808743167%"),
    top: hp("71.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_72_36: {
    width: wp("68.26666666666667%"),
    top: hp("71.72131147540983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.466666666666665%")
  },
  Text_72_36: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_37: {
    width: wp("86.66666666666667%"),
    height: hp("8.743169398907105%"),
    top: hp("78.55191256830601%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    backgroundColor: "rgba(22, 165, 59, 1)",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  View_72_39: {
    width: wp("54.93333333333334%"),
    top: hp("80.46448087431693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.133333333333333%")
  },
  Text_72_39: {
    color: "rgba(255, 248, 248, 1)",
    fontSize: 19,
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
