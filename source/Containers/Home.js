import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Menu } from "../Components/Menu.js";
import {StackNavigator} from 'react-navigation';

export class Home extends React.Component {
    static navigationOptions = {
        header: null
    };
    
    render() {
        const{ navigate }=this.props.navigation;

        return (
            <View style={styles.container}>
                <Menu navigate={navigate}/> 
            </View>
      );
    }
  }

const styles = StyleSheet.create({ 
  container:{
    flex: 1,
    backgroundColor: '#fcb69f'
}
});