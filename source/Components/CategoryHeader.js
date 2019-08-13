import React from'react';
import {Text,StyleSheet,StatusBar,View} from 'react-native'
import { Icon} from 'native-base';

export class CategoryHeader extends React.Component{
    render() {
        return (
            <View style={styles.rectangle3}>
           <StatusBar backgroundColor="#fcb69f"/>
           <Icon  name="md-menu" style={styles.icon} ><Text style={styles.category}>Category</Text>
            <Icon  name="md-add-circle" style={styles.icon2}/></Icon>
           
            </View>
            

        );
    }

}
const styles=StyleSheet.create({
    category:{
        width: 70,
        height: 20,
        fontFamily: "HelveticaNeue",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
       
        color: "#ffffff",
        
    
    },
    rectangle3 : {
        width: 375,
        height: 115,
        backgroundColor: '#fcb69f'
    },
    icon:{
        paddingLeft: 30,
        fontSize: 30, 
        color: '#ffffff'
    },
    icon2:{
        paddingEnd:100,
        color: '#ffffff',
        fontSize: 30
    }
});