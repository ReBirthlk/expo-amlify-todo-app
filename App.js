import React from 'react';
import {
View,
  Text,
  StyleSheet
 
} from 'react-native';

const App = () => {
  return (
    <View style={styles.rectangle3}>
      <Text>Hi</Text>
    </View>
  );
};
export default App;
const styles=StyleSheet.create({
  rectangle3 : {
    width: 375,
    height: 275,
    backgroundColor:'#fcb69f'
  },
  
});