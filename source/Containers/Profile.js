import React from "react";
import { View,StyleSheet,Text,StatusBar,Image,Button} from "react-native";
import { Icon } from "native-base";

export class Profile extends React.Component {

  static navigationOptions = {
      header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#00aea7" />

   <View style={styles.bg}>
    
   <Image
    source={require("../../assets/Icon/light_back.png")}
    style={styles.backButton}
    resizeMode="contain"/>
  <Text style={styles.edit}>Edit       </Text>
   <Text style={styles.head}>Profile</Text>
   <Text style={styles.travel}>Please read our terms and conditions</Text>
   </View>

   <Image
      style={styles.avatar}
      source={require("../../assets/Icon/avatar.png")} />
      
 <View style={styles.rectangle9661}>
 <Text style={styles.text1}>Name</Text>
   <Text style={styles.text2}>John Doe</Text></View>
 <View style={styles.rectangle967}/>

 <View style={styles.rectangle966}>
 <Text style={styles.text1}>Email</Text>
 <Text style={styles.text2}>johndoe@mail.com</Text></View>
<View style={styles.rectangle965}/>

<View style={styles.rectangle966}>
 <Text style={styles.text1}>Natinality</Text>
 <Text style={styles.text2}>USA</Text></View>
 <View style={styles.rectangle963}/>
</View>
    );
  }
}

const styles = StyleSheet.create({
 
  container: { 
    width: 375,
    height: 812,
    backgroundColor: "#00aea7",
    
  },
  bg:{
    width: 375,
    height: 175,
    backgroundColor:"#00aea7",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#03918c",
    borderBottomLeftRadius: 70
  },
  head:{
    marginTop:30,
    paddingLeft:55,
    fontFamily: "Catamaran",
    fontSize: 26,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 30,
    letterSpacing: -0.42,
    textAlign: "left",
    color: "#ffffff",  
  },
  backButton: {
    marginTop: 10,
    height: 30,
   
  },
  travel :{
    marginTop:10,
    fontFamily: "Catamaran",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 19,
    letterSpacing: -0.24,
    textAlign: "left",
    color: "#ffffff",
    paddingLeft:55,
  },
  avatar:{
    width: 79.1,
    height: 79.1,
    alignItems:'center',
    resizeMode:'contain',
    paddingLeft:350,
    marginTop:50
  
  },
  rectangle9661 :{
    width: 375,
    height: 56,
    backgroundColor: "#00aea7",
    marginTop:40
  },
  rectangle966 :{
    width: 375,
    height: 56,
    backgroundColor: "#00aea7",
  },
  text1 : {
    marginTop:10,
    fontFamily: "Catamaran",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 23,
    letterSpacing: 0,
    textAlign: "left",
    color: "#ffffff"
  },
  rectangle967 : {
    width: 375,
    height: 1,
    opacity: 0.2,
    backgroundColor: "#414141"
  },
  rectangle965 : {
    width: 375,
    height: 1,
    backgroundColor: "rgba(65, 65, 65, 0.2)"
  },
  rectangle963 : {
    width: 375,
    height: 1,
    backgroundColor: "rgba(65, 65, 65, 0.2)"
  },
  text2: {
    marginTop:-20,
    fontFamily: "Arial",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "right",
    color: "#ffffff", 
      
  },
  edit: {
    marginTop:-25,
    fontFamily: "Catamaran",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 23,
    letterSpacing: 0,
    textAlign:"right",
    color: "#ffffff",
    paddingLeft:-50
  }
});
