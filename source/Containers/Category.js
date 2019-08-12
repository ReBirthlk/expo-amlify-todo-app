import React from'react';
import {Text,View,StyleSheet} from 'react-native'
export class Category extends React.Component{
    render() {
        return (
            <View style={styles.rectangle3}>
            <Text style={styles.category}>Category</Text>
          </View>
        );
    }

}
const styles=StyleSheet.create({
    rectangle3 : {
        width: 375,
        height: 115,
        backgroundColor: '#fcb69f'
    },
    category:{
        width: 70,
        height: 20,
        fontFamily: "HelveticaNeue",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: 'center',
        color: "#ffffff"
    }
    
  });