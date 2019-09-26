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
                    <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('ProfileRT')}>
                            <Text style={styles.buttonText}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('PhoneRT')}>
                        <Text style={styles.buttonText}>Mobile</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('OtpRT')}>
                        <Text style={styles.buttonText}>OTP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('LanRT')}>
                        <Text style={styles.buttonText}>Lan</Text>
                    </TouchableOpacity>
                    </View>

                  <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('SignRT')}>
                            <Text style={styles.buttonText}>Sign up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('PopRT')}>
                            <Text style={styles.buttonText}>Pop up</Text>
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
