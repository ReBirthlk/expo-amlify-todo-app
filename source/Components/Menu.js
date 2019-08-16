import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text,Alert} from 'react-native';


export class Menu extends React.Component {
    static navigationOptions = {
        header: null
    };
    
    onPress = ()=> {
        Alert.alert('You tapped the button!');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('ScheduleRT')}>
                            <Text style={styles.buttonText}>Schedule</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('CategoryRT')}>
                        <Text style={styles.buttonText}>Category</Text>
                    </TouchableOpacity>
                </View>
            </View>

      );
    }
  }

  const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fcb69f'
    },
    buttonRow: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1
    },
    buttonStyles:{
        backgroundColor: '#EC7063',
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#ffffff',
        fontSize: 18
    }
});
