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
        style={styles.ImageBackground_24_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2a8/49da/2acf1957024154bab6ebaf790253c461"
        }}
        style={styles.ImageBackground_24_6}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8311/6415/c6106da3ec8380438dc2f29006f57c23"
        }}
        style={styles.ImageBackground_24_7}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3ff/e8ea/74bf55939deace3b30618ddc8740325d"
        }}
        style={styles.ImageBackground_24_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09f7/0c84/8cf3f50eddd9eca4835cf51618ab5cbe"
        }}
        style={styles.ImageBackground_24_9}
      />
      <View style={styles.View_24_10}>
        <Text style={styles.Text_24_10}>10:22</Text>
      </View>
      <View style={styles.View_24_11} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b24/5962/13bf319a745c5b0e62deb74cb1343043"
        }}
        style={styles.ImageBackground_24_12}
      />
      <View style={styles.View_24_26} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cacf/4ef3/0b7b33c23aacc8e5083c25afeb340a37"
        }}
        style={styles.ImageBackground_24_30}
      />
      <View style={styles.View_24_32}>
        <Text style={styles.Text_24_32}>Hi Emeka!</Text>
      </View>
      <View style={styles.View_24_34}>
        <Text style={styles.Text_24_34}>menu</Text>
      </View>
      <View style={styles.View_24_33} />
      <View style={styles.View_24_35} />
      <View style={styles.View_24_36} />
      <View style={styles.View_24_37} />
      <View style={styles.View_24_38} />
      <View style={styles.View_24_39} />
      <View style={styles.View_24_40} />
      <View style={styles.View_30_2}>
        <Text style={styles.Text_30_2}>manage beneficiary</Text>
      </View>
      <View style={styles.View_30_3}>
        <Text style={styles.Text_30_3}>new transfers</Text>
      </View>
      <View style={styles.View_30_4}>
        <Text style={styles.Text_30_4}>edit profile</Text>
      </View>
      <View style={styles.View_30_5}>
        <Text style={styles.Text_30_5}>change password</Text>
      </View>
      <View style={styles.View_30_6}>
        <Text style={styles.Text_30_6}>contact us</Text>
      </View>
      <View style={styles.View_30_7}>
        <Text style={styles.Text_30_7}>transaction list</Text>
      </View>
      <View style={styles.View_135_0}>
        <Text style={styles.Text_135_0}>balance</Text>
      </View>
      <View style={styles.View_135_6}>
        <Text style={styles.Text_135_6}>currency</Text>
      </View>
      <View style={styles.View_135_3}>
        <Text style={styles.Text_135_3}>0023889120</Text>
      </View>
      <View style={styles.View_135_5}>
        <Text style={styles.Text_135_5}>A-S</Text>
      </View>
      <View style={styles.View_135_2}>
        <Text style={styles.Text_135_2}>account number</Text>
      </View>
      <View style={styles.View_135_7}>
        <Text style={styles.Text_135_7}>account number</Text>
      </View>
      <View style={styles.View_135_8}>
        <Text style={styles.Text_135_8}>NGN</Text>
      </View>
      <View style={styles.View_135_4}>
        <Text style={styles.Text_135_4}>account type</Text>
      </View>
      <View style={styles.View_135_1}>
        <Text style={styles.Text_135_1}>₦ 28,984,990.00</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_24_4: {
    width: wp("4.8%"),
    height: hp("1.092896174863388%"),
    top: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.53333333333333%")
  },
  ImageBackground_24_6: {
    width: wp("4.533333333333333%"),
    height: hp("1.639344262295082%"),
    top: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.39999999999999%")
  },
  ImageBackground_24_7: {
    width: wp("4.266666666666667%"),
    height: hp("1.7759562841530054%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%")
  },
  ImageBackground_24_8: {
    width: wp("53.333333333333336%"),
    height: hp("27.322404371584703%"),
    top: hp("-13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-19.733333333333334%")
  },
  ImageBackground_24_9: {
    width: wp("50.13333333333333%"),
    height: hp("24.59016393442623%"),
    top: hp("-14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%")
  },
  View_24_10: {
    width: wp("8.533333333333333%"),
    top: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%")
  },
  Text_24_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_11: {
    width: wp("37.86666666666667%"),
    height: hp("16.80327868852459%"),
    top: hp("94.12568306010928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.133333333333326%"),
    backgroundColor: "rgba(135, 242, 163, 1)"
  },
  ImageBackground_24_12: {
    width: wp("75.73333333333333%"),
    height: hp("40.16393442622951%"),
    top: hp("70.76502732240438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.266666666666666%")
  },
  View_24_26: {
    width: wp("7.733333333333333%"),
    height: hp("3.6885245901639343%"),
    top: hp("85.79234972677595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.46666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_24_30: {
    width: wp("5.833333333333333%"),
    height: hp("2.988387978142076%"),
    top: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%")
  },
  View_24_32: {
    width: wp("72.53333333333333%"),
    top: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%")
  },
  Text_24_32: {
    color: "rgba(68, 141, 87, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_34: {
    width: wp("72.53333333333333%"),
    top: hp("47.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%")
  },
  Text_24_34: {
    color: "rgba(68, 141, 87, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_33: {
    width: wp("86.66666666666667%"),
    height: hp("17.076502732240435%"),
    top: hp("29.098360655737704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    backgroundColor: "rgba(52, 168, 83, 1)",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  View_24_35: {
    width: wp("40.8%"),
    height: hp("11.065573770491802%"),
    top: hp("52.86885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    backgroundColor: "rgba(52, 168, 83, 1)",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  View_24_36: {
    width: wp("40%"),
    height: hp("11.065573770491802%"),
    top: hp("52.86885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.800000000000004%"),
    backgroundColor: "rgba(52, 168, 83, 1)",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  View_24_37: {
    width: wp("40.8%"),
    height: hp("11.065573770491802%"),
    top: hp("66.2568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    backgroundColor: "rgba(52, 168, 83, 1)",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  View_24_38: {
    width: wp("40%"),
    height: hp("11.065573770491802%"),
    top: hp("66.2568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.800000000000004%"),
    backgroundColor: "rgba(52, 168, 83, 1)",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  View_24_39: {
    width: wp("40.8%"),
    height: hp("11.065573770491802%"),
    top: hp("79.6448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    backgroundColor: "rgba(52, 168, 83, 1)",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  View_24_40: {
    width: wp("40%"),
    height: hp("11.065573770491802%"),
    top: hp("79.6448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.333333333333336%"),
    backgroundColor: "rgba(52, 168, 83, 1)",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  View_30_2: {
    width: wp("36.266666666666666%"),
    top: hp("56.557377049180324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%")
  },
  Text_30_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_3: {
    width: wp("27.200000000000003%"),
    top: hp("56.557377049180324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.133333333333326%")
  },
  Text_30_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_4: {
    width: wp("19.733333333333334%"),
    top: hp("69.80874316939891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.333333333333336%")
  },
  Text_30_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_5: {
    width: wp("32.53333333333333%"),
    top: hp("69.80874316939891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.13333333333334%")
  },
  Text_30_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_6: {
    width: wp("19.733333333333334%"),
    top: hp("83.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.333333333333336%")
  },
  Text_30_6: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_7: {
    width: wp("20.533333333333335%"),
    top: hp("83.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  Text_30_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_0: {
    width: wp("18.4%"),
    top: hp("30.87431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%")
  },
  Text_135_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_6: {
    width: wp("18.4%"),
    top: hp("31.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.86666666666667%")
  },
  Text_135_6: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_3: {
    width: wp("32.800000000000004%"),
    top: hp("41.53005464480874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666667%")
  },
  Text_135_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_5: {
    width: wp("32.800000000000004%"),
    top: hp("42.07650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.26666666666667%")
  },
  Text_135_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_2: {
    width: wp("32.800000000000004%"),
    top: hp("39.07103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%")
  },
  Text_135_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_7: {
    width: wp("32.800000000000004%"),
    top: hp("39.07103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%")
  },
  Text_135_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_8: {
    width: wp("32.800000000000004%"),
    top: hp("34.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46666666666667%")
  },
  Text_135_8: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_4: {
    width: wp("32.800000000000004%"),
    top: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.60000000000001%")
  },
  Text_135_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_1: {
    width: wp("76.53333333333333%"),
    top: hp("33.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.4%")
  },
  Text_135_1: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
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
