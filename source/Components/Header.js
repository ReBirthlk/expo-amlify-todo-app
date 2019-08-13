import React from'react';
import {StyleSheet,View,Text} from 'react-native'
import {Icon} from 'native-base';



export class Header extends React.Component{
    
    render(){
        return(
            
            <View style={styles.rectangle3}>
                <View style={{flexDirection:"row",justifyContent:'space-between',padding:5}}>
                    <Icon style={styles.icon_menu}name="md-menu" size={30} color='green'/>
                    <Text style={styles.topic}>Schedule</Text>
                </View>
                
                <Text style={styles.date}>12,AUG 2019</Text>
                       
            </View>
        );
    }

}
const styles=StyleSheet.create({
    icon_menu:{
        
    },

    topic:{
        fontSize: 20,
        color:'#ffffff',
        paddingStart:10

    },
    rectangle3:{
        width: 412,
        height: 175,
        backgroundColor:'#fcb69f',
        
        
      },
     
      schedule:{
        letterSpacing: 0,
        textAlign: 'center',
        color: "#ffffff"
      },
      date:{
        fontFamily: 'HelveticaNeue',
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'center',
        color: "#ffffff",
      }
   

});
