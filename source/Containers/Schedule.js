<<<<<<< HEAD
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Header } from "../Components/Header";
import { Body } from "../Components/Body";
=======
import React from'react';
import {StyleSheet,View,Text} from 'react-native'
import { Header } from '../Components/Header';
import { Body } from '../Components/Body';


export class Schedule extends React.Component{
    render(){
        return(
        <View style={styles.container}>
            <Header/>
            <Body/>
            </View>
        );
    }
>>>>>>> 6e0fec1e6602f8922db71786e94764fd4631a9a3

export class Schedule extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Body />
      </View>
    );
  }
}
<<<<<<< HEAD
const styles = StyleSheet.create({
  iPhoneX1: {
    width: 375,
    height: 812,
    backgroundColor: "#ffffff"
  },
  container: {
    flex: 1
  }
});
=======
const styles=StyleSheet.create({
    iPhoneX1:{
        width: 375,
        height: 812,
        backgroundColor: "#ffffff"
      },
    container:{
        flex:1,
      }
    
})
>>>>>>> 6e0fec1e6602f8922db71786e94764fd4631a9a3
