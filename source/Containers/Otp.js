import React from 'react';
import {  View,Text,StatusBar,StyleSheet,TouchableOpacity} from 'react-native';
import {  Item, Input } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

export class OTP extends React.Component {
    static navigationOptions = {
        header: null
    };
    state={otp:[]};
    otpTextInput = [];

    componentDidMount() {
        this.otpTextInput[0]._root.focus();
    }

    renderInputs() {
        const inputs = Array(4).fill(0);
        const txt = inputs.map(
            (i, j) => <Col key={j} style={styles.txtMargin}><Item regular>
                <Input
                    style={[styles.inputRadius, { borderRadius: 10 }]}
                    keyboardType="numeric"
                    placeholder='0'
                    onChangeText={v => this.focusNext(j, v)}
                    onKeyPress={e => this.focusPrevious(e.nativeEvent.key, j)}
                    ref={ref => this.otpTextInput[j] = ref}
                />
            </Item></Col>
        );
        return txt;
    }

    focusPrevious(key, index) {
        if (key === 'Backspace' && index !== 0)
            this.otpTextInput[index - 1]._root.focus();
    }

    focusNext(index, value) {
        if (index < this.otpTextInput.length - 1 && value) {
            this.otpTextInput[index + 1]._root.focus();
        }
        if (index === this.otpTextInput.length - 1) {
            this.otpTextInput[index]._root.blur();
        }
        const otp = this.state.otp;
        otp[index] = value;
        this.setState({ otp });
    }
    render() {
        return ( 
            
            <View style={styles.container}>
                <StatusBar backgroundColor="#00aea7" />
                <Text style={styles.head}>Enter OTP</Text>
                <Grid style={styles.gridPad}>
                    {this.renderInputs()}
                </Grid>
                <TouchableOpacity>
                    <Text style={styles.resendOtp}>Resend OTP</Text>
                </TouchableOpacity>    
                <View style={styles.bg}>
                        <TouchableOpacity>
                            <Text style={styles.signUp}>Sign up</Text>
                        </TouchableOpacity>
                </View>         
            </View>
           
        );
    }
}

const styles = StyleSheet.create({
    gridPad: {
        padding: 30,
    },
    txtMargin: {
        margin: 3
    },
    inputRadius: {
        marginTop:30,
        textAlign: 'center',
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "rgba(0, 174, 167, 0.2)",
        width: 70.8,
        height: 50,
    },
    container: {
        width: 375,
        height: 812,
        backgroundColor: "#f8ffff"     
    },
    head:{
        marginTop:110,
        fontFamily: "Catamaran",
        fontSize: 26,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 30,
        letterSpacing: -0.42,
        textAlign: "center",
        color: "#00aea7"
    },
    resendOtp:{
        marginTop:30,
        marginBottom:440,
        fontFamily: "Catamaran",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0.06,
        textAlign: "center",
        color: "#00aea7",
        textDecorationLine: 'underline'
    },
    bg :{
        marginBottom:120,
        width: 360,
        height: 60,
        backgroundColor: "#00aea7",
        borderTopRightRadius: 70   
    },
    signUp : {
        marginTop:10,
        fontFamily: "Catamaran",
        fontSize: 16,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 27,
        letterSpacing: 0,
        textAlign: "center",
        color: "#ffffff"                       
    },  
});
