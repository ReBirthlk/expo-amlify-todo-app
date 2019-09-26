import React from "react";
import { View,StyleSheet,StatusBar,Text,Image ,TouchableHighlight, Alert,Modal,FlatList, Dimensions } from "react-native";

const data = [
    { key: 'Ad 1' }, { key: 'Ad 2' }, { key: 'Ad 3' }, { key: 'Ad 4' }, { key: 'Ad 5' }, 
    { key: 'Ad 6' }, { key: 'Ad 7' }, { key: 'Ad 8' }, { key: 'Ad 9' }, { key: 'Ad 10' },{ key: 'Ad 11' },{ key: 'Ad 12' }
    
  ];

  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
  
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
  
    return data;
  };
  
  const numColumns = 3;
  
export class PopUpScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    state = {
        modalVisible: false,
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    
      renderItem = ({ item, index }) => {
        if (item.empty === true) {
          return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
          <View
           >
            <Image
    source={require("../../assets/Icon/ad.png")}
    style={styles.item}
    resizeMode="contain"/>
            <Text style={styles.itemText}>{item.key}</Text>
          </View>
        );
      };
    
    
    render() {
        return (
            <View style={styles.container}>
            <StatusBar backgroundColor="rgb(211,211,211)" />
            <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}>
        
         
            <View style={styles.popUp}>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
               
                <Text style={styles.hideButton}/>
               
              </TouchableHighlight>
              <FlatList
                data={formatData(data, numColumns)}
                style={styles.containers}
                renderItem={this.renderItem}
                numColumns={numColumns}
                 /> 
              
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text >Show Modal</Text>
        </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
 
    container: { 
        width: 375,
        height: 812,
        opacity: 0.2,
        backgroundColor: "rgb(211,211,211)" 
    },
    containers: {
        flex: 1,
        marginVertical: 20,
      },
    popUp:{
        marginTop: 140,
        borderTopRightRadius: 70,
        width: 360,
        height: 652.6,
        backgroundColor: "#f8ffff",
        shadowColor: "rgba(38, 153, 251, 0.1)",
        shadowOffset: {width: 0,height: -20,},
        shadowRadius: 30,
        shadowOpacity: 1
    },
    hideButton:{
        width:70,
        height:3,
        backgroundColor: "rgb( 0 ,174, 167)",
        marginLeft:150,
        marginTop:15
    },
    item: {
        width:92.4,
        height:92.4,
        marginLeft:20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
        height: Dimensions.get('window').width / numColumns, // approximate a square
    },
    itemInvisible: {
        backgroundColor: '#000000',
    },
    itemText: {
        color: '#000000',
        marginLeft:20,
        textAlign:'center'
    },
 
});
