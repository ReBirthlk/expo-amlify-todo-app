import React from'react';
import {StyleSheet,View,Text} from 'react-native'



export class Header extends React.Component{
    
    render(){
        return(
            
            <View
                style={styles.rectangle3}>
                    <View  style={styles.schedule}>
                        <Text>Schedule</Text>
                        <Text>12,AUG 2019</Text>
                    </View>
            </View>
        );
    }

}
const styles=StyleSheet.create({
    rectangle3:{
        width: 412,
        height: 175,
        backgroundColor:'#fcb69f'
      },
      schedule:{
        width: 72,
        height: 17,
        fontFamily: "HelveticaNeue",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#ffffff"
      },
      date:{
        width: 92,
        height: 22,
        fontFamily: "HelveticaNeue",
        fontSize: 20,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#ffffff"

      }
   

});