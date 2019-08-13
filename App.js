import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Category } from './source/Containers/Category.js'
import { Schedule } from './source/Containers/Schedule.js';

const App = () => {
  return (
    <View style={styles.rectangle3}>
      <Text>Hi</Text>
    </View>
  );
};
export default Category;
const styles = StyleSheet.create({
  rectangle3: {
    width: 375,
    height: 275,
    backgroundColor: '#fcb69f'
  }
});