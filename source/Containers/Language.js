import React from "react";
import { View, StyleSheet,Text,Button,StatusBar,TextInput,TouchableOpacity} from "react-native";
import {Icon} from 'native-base'

export class Language extends React.Component {

  static navigationOptions = {
      header: null
  };

  render() {
    return (
        <View style={styles.container}>
           <StatusBar backgroundColor="#00aea7" />
        <Text style={styles.head}>Select Language</Text>
        
        <View style={styles.rectangle147}>
        <TextInput style={styles.language}>Language</TextInput>
        <Icon
          active
          name='md-arrow-dropdown'
          style={styles.iconStyle}/>
       

        </View>
       
        <View style={styles.bg}><TouchableOpacity>
        <Text style={styles.next}>Next</Text>
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
    marginTop:110,
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
  rectangle147 : {
    marginTop:30,
    width: 300,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgba(0, 174, 167, 0.2)",
    marginLeft:30,
  },
  next : {
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
    marginTop:420,
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
  }
});

