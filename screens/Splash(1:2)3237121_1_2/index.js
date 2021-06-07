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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/405c/d7a8/4b41aeb46a4ead2e4dda3664f3b076f4"
        }}
        style={styles.ImageBackground_4_6}
      />
      <View style={styles.View_4_5} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc10/aeda/cdcf2fe1c4a5b57b0f797d19b65fa43f"
        }}
        style={styles.ImageBackground_4_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b951/dbdb/93a537e51e9ecc25d7cddd8ab5b453ce"
        }}
        style={styles.ImageBackground_4_1}
      />
      <View style={styles.View_5_0}>
        <Text style={styles.Text_5_0}>10:22</Text>
      </View>
      <View style={styles.View_9_0}>
        <Text style={styles.Text_9_0}>greenleaf™</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_4_6: {
    width: wp("4.8%"),
    height: hp("1.092896174863388%"),
    top: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.53333333333333%")
  },
  View_4_5: {
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
  ImageBackground_4_4: {
    width: wp("4.533333333333333%"),
    height: hp("1.639344262295082%"),
    top: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.39999999999999%")
  },
  ImageBackground_4_1: {
    width: wp("4.266666666666667%"),
    height: hp("1.7759562841530054%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%")
  },
  View_5_0: {
    width: wp("8.533333333333333%"),
    top: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%")
  },
  Text_5_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_0: {
    width: wp("48.266666666666666%"),
    top: hp("49.45355191256831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.26666666666667%")
  },
  Text_9_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "800",
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
