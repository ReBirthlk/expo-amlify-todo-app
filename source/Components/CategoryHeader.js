import React from'react';
import {Text,StyleSheet,StatusBar,View} from 'react-native'

export class CategoryHeader extends React.Component{
    render() {
        return (
            <View style={styles.rectangle3}>
           <StatusBar backgroundColor="#fcb69f"/>
           <Text style={styles.category}>Category</Text>
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
        letterSpacing: 0,
        textAlign: 'center',
        color: "#ffffff",
    },
    rectangle3 : {
        width: 375,
        height: 115,
        backgroundColor: '#fcb69f'
    }
});