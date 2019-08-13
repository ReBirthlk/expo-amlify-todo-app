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

}
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