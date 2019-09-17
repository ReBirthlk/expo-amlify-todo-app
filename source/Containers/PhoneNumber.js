import React from "react";
import { View, StyleSheet,Text,Button,StatusBar} from "react-native";


export class PhoneNumber extends React.Component {

  static navigationOptions = {
      header: null
  };

  render() {
    return (
      <View style={styles.container}>
           <StatusBar backgroundColor="#00aea7" />
       <Text style={styles.head}>Enter Mobile Number</Text>
       <View style={styles.rectangle147}></View>
       <View style={styles.bg}><Text style={styles.signUp}>Sign up</Text></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
        width: 375,
        height: 812,
        backgroundColor: "#f8ffff"
  },
  head : {
    marginTop:110,
    fontFamily: "Catamaran",
    fontSize: 26,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 30,
    letterSpacing: -0.42,
    textAlign: "center",
    color: "#00aea7"
  },
  rectangle147 : {
    marginTop:20,
    width: 311,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgba(0, 174, 167, 0.2)",
    marginLeft:20
  },
  signUp : {
    marginTop:10,
    fontFamily: "Catamaran",
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 27,
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  },
  bg :{
    marginTop:480,
    width: 375,
    height: 60,
    backgroundColor: "#00aea7",
    borderTopRightRadius: 70
  }
});
