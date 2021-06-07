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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3ff/e8ea/74bf55939deace3b30618ddc8740325d"
        }}
        style={styles.ImageBackground_74_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09f7/0c84/8cf3f50eddd9eca4835cf51618ab5cbe"
        }}
        style={styles.ImageBackground_74_5}
      />
      <View style={styles.View_74_7} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b24/5962/13bf319a745c5b0e62deb74cb1343043"
        }}
        style={styles.ImageBackground_74_8}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_74_4: {
    width: wp("53.333333333333336%"),
    height: hp("27.322404371584703%"),
    top: hp("-13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-19.733333333333334%")
  },
  ImageBackground_74_5: {
    width: wp("50.13333333333333%"),
    height: hp("24.59016393442623%"),
    top: hp("-14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%")
  },
  View_74_7: {
    width: wp("37.86666666666667%"),
    height: hp("16.80327868852459%"),
    top: hp("94.12568306010928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.133333333333326%"),
    backgroundColor: "rgba(135, 242, 163, 1)"
  },
  ImageBackground_74_8: {
    width: wp("75.73333333333333%"),
    height: hp("40.16393442622951%"),
    top: hp("70.76502732240438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.266666666666666%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
