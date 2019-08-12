import React from'react';
import {Text,StyleSheet,View} from 'react-native'

export class Card extends React.Component{
    render() {
        return (
            <View style={styles.iPhoneX2}>

            <View style={styles.rectangle5}>
            <Text style={styles.personal}>Personal</Text>
            <Text style={styles.tasks}>12Tasks</Text>
            </View>

            <View style={styles.rectangle12}>
            <Text style={styles.shoping}>Shoping</Text>
            <Text style={styles.tasks}>9Tasks</Text>
            </View>

            <View style={styles.rectangle12}>
            <Text style={styles.sport}>Sport</Text>
            <Text style={styles.tasks}>10Tasks</Text>
            </View>

            <View style={styles.rectangle12}>
            <Text style={styles.event}>Event</Text>
            <Text style={styles.tasks}>10Tasks</Text>
            </View>

            <View style={styles.rectangle12}>
            <Text style={styles.work}>Work</Text>
            <Text style={styles.tasks}>25Tasks</Text>
            </View>

            </View>
        );
    }

}
const styles=StyleSheet.create({
    rectangle5 : {
        width: 344,
        height: 94,
        borderRadius: 20,
        backgroundColor: "#ffffff",
      },
      personal : {
        width: 60,
        height: 16,
        fontFamily: "HelveticaNeue",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign:'left',
        color: "#a3a3a3"
      },
      tasks : {
        width: 48,
        height: 16,
        fontFamily: "HelveticaNeue",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#a3a3a3"
      },
      iPhoneX2: {
        width: 375,
        height: 812,
        backgroundColor: "#D0D3D4"
      },
      rectangle12 : {
        width: 344,
        height: 94,
        borderRadius: 20,
        backgroundColor: "#ffffff"
      },
     
      shoping : {
        width: 56,
        height: 16,
        fontFamily: "HelveticaNeue",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#a3a3a3"
      },
      
      sport : {
        width: 36,
        height: 16,
        fontFamily: "HelveticaNeue",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#a3a3a3"
      },
       event : {
        width: 38,
        height: 16,
        fontFamily: "HelveticaNeue",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#a3a3a3"
      },
       work :{
        width: 34,
        height: 16,
        fontFamily: "HelveticaNeue",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#a3a3a3"
      }
     
});