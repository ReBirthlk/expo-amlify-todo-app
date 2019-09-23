import React from "react";
import { View, StyleSheet,Text,StatusBar,TouchableOpacity,TextInput} from "react-native";


export class SignUpFrom extends React.Component {

  static navigationOptions = {
      header: null
  };
  
  render() {
    return (
        <View style={styles.container}>
           <StatusBar backgroundColor="#00aea7" />
        <Text style={styles.head}>More about you</Text>
        
        <View style={styles.rectangle1}>
        <TextInput style={styles.inputText} >Jhone Doe  </TextInput> 
        <Text style={styles.text}>Full Name</Text>
        </View>

        <View style={styles.rectangle2}>
        <TextInput style={styles.inputText} >johndoe@mail.com  </TextInput> 
        <Text style={styles.text}>Email</Text>
        </View>

        <View style={styles.rectangle3}>
        <TextInput style={styles.inputText} >Sri Lanka  </TextInput> 
        <Text style={styles.text}>Nationality</Text> 
        </View>

        <View style={styles.bg}><TouchableOpacity>
        <Text style={styles.signUp}>Sign Up</Text>
        </TouchableOpacity></View>
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
    marginTop:100,
    fontFamily: "Catamaran",
    fontSize: 26,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 30,
    letterSpacing: -0.42,
    textAlign: "center",
    color: "#00aea7",
    paddingTop:50,
    paddingRight:10
  },
  
  rectangle1 : {
    marginTop:35,
    width: 300,
    height: 50,
    marginLeft:30,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgba(0, 174, 167, 0.2)"
  },
  rectangle2 : {
    marginTop:16,
    width: 300,
    height: 50,
    marginLeft:30,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgba(0, 174, 167, 0.2)"
  },
  rectangle3 : {
    marginTop:16,
    width: 300,
    height: 50,
    marginLeft:30,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgba(0, 174, 167, 0.2)"
  },
  signUp : {
    marginTop:17,
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
    marginTop:293,
    width: 360,
    height: 60,
    backgroundColor: "#00aea7",
    borderTopRightRadius: 70   
  },
  input: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000000', 
  },
  iconStyle: {
    color: '#00aea7',
    fontSize: 28,
    marginLeft: 264,
    marginTop:-37
  },
  language:{
    fontFamily: "Catamaran",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 23,
    letterSpacing: 0,
    textAlign: "left",
    color: "#00aea7",
    paddingLeft:20
  },
  inputText:{
    fontFamily: "Catamaran",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 23,
    letterSpacing: 0,
    textAlign: "left",
    color: "#00aea7",
    marginLeft:20
  },
  text:{
    marginTop:-31,
    fontFamily: "Catamaran",
    fontSize: 10,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "right",
    color: "#00aea7",
    marginRight:20
  }
});