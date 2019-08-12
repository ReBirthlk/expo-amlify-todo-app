import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export class Body extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.Today}>Today</Text>
            </View>
        );
    }

}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    Today:{  
        width: 80,
        height: 37,
        fontFamily: "HelveticaNeue",
        fontSize: 28,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0.01,
        textAlign: "center",
        color: "#a3a3a3"},

})