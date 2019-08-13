import React from'react';
import {View,StyleSheet} from 'react-native'
import {CategoryHeader} from '../Components/CategoryHeader.js'
import {Card} from '../Components/Card.js'

export class Category extends React.Component{
    render() {
        return (
          <View style={styles.container}>
                  <CategoryHeader/>
                  <Card/>
                  
          </View>
           

        );
       
    }

}
const styles=StyleSheet.create({

     container:{
          flex: 1
      },
    
    
  });