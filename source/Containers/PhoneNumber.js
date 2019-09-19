import React from 'react'
import { 
  View,
  Text,
  Modal,
  FlatList,
  StyleSheet, 
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,StatusBar
} from 'react-native'

import {
  Item,
  Input,
  Icon
} from 'native-base'

import data from '../Components/Countries'

const defaultFlag = data.filter(
  obj => obj.name === 'Sri Lanka'
  )[0].flag

export class PhoneNumber extends React.Component  {

  static navigationOptions = {
        header: null
  };
  state = {
    flag: defaultFlag,
    modalVisible: false,
    phoneNumber: '',
  }
  onChangeText(key, value) {
    this.setState({
      [key]: value
    })
  }
  showModal() {
    this.setState({ modalVisible: true })
  }
  hideModal() {
    this.setState({ modalVisible: false })
    this.refs.PhoneInput._root.focus()
  }

  async getCountry(country) {
    const countryData = await data
    try {
      const countryCode = await countryData.filter(
        obj => obj.name === country
      )[0].dial_code
      const countryFlag = await countryData.filter(
        obj => obj.name === country
      )[0].flag
      this.setState({ phoneNumber: countryCode, flag: countryFlag })
      await this.hideModal()
    }
    catch (err) {
      console.log(err)
    }
  }

  render() {
    let { flag } = this.state
    const countryData = data
    return (
          <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.container}>
            <StatusBar backgroundColor="#00aea7" />
            <Text style={styles.head}>Enter Mobile Number</Text>   
                  <Item rounded style={styles.itemStyle}>
                    <View><Text style={{fontSize: 30}}>  {flag}</Text></View>
                    <Icon
                      active
                      name='md-arrow-dropdown'
                      style={[styles.iconStyle, { marginLeft: 5 }]}
                      onPress={() => this.showModal()}
                    />
                    <Input
                      style={styles.input}
                      placeholder='+94766554433'
                      placeholderTextColor='#adb4bc'
                      keyboardType={'phone-pad'}
                      returnKeyType='done'
                      autoCapitalize='none'
                      autoCorrect={false}
                      secureTextEntry={false}
                      ref='PhoneInput'
                      value={this.state.phoneNumber}
                      onChangeText={(val) => {
                        if (this.state.phoneNumber===''){
                          this.onChangeText('phoneNumber', defaultCode + val)
                        } else {
                          this.onChangeText('phoneNumber', val)
                        }}
                      }/>
                    <Modal
                      animationType="slide" 
                      transparent={false}
                      visible={this.state.modalVisible}>
                      <View style={{ flex: 1, }}>
                        <View style={{ flex: 10, paddingTop: 8, backgroundColor: '#f8ffff'}}>
                          <FlatList
                            data={countryData}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={
                              ({ item }) =>
                                <TouchableWithoutFeedback 
                                  onPress={() => this.getCountry(item.name)}>
                                  <View 
                                    style={
                                      [
                                        styles.countryStyle, 
                                        {
                                          flexDirection: 'row', 
                                          alignItems: 'center',
                                          justifyContent: 'space-between'
                                        }
                                      ]
                                    }>
                                    <Text style={{fontSize: 45}}>
                                      {item.flag}
                                    </Text>
                                    <Text style={{fontSize: 20, color: '#000000'}}>
                                      {item.name} ({item.dial_code})
                                    </Text>
                                  </View>
                                </TouchableWithoutFeedback>
                            }
                          />
                        </View>
                        <TouchableOpacity
                          onPress={() => this.hideModal()} 
                          style={styles.closeButtonStyle}>
                          <Text style={styles.textStyle}>
                            Close
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </Modal>
                  </Item>
                  <View style={styles.bg}><TouchableOpacity>
                  <Text style={styles.signUp}>Sign up</Text>
                  </TouchableOpacity></View>
            </View>
          </TouchableWithoutFeedback>
    
    )
  }
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#f8ffff',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 375,
    height: 812,
  },
  input: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000000',
  },
  itemStyle: {
    marginTop:20,
    width: 311,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgba(0, 174, 167, 0.2)",
    marginLeft:20
  },
  iconStyle: {
    color: '#D3D3D3',
    fontSize: 28,
    marginLeft: 15
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#b44666',
    padding: 14,
    marginBottom: 10,
    borderRadius: 3,
    width:150,
    height:150,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#000000",
  },
  textStyle: {
    padding: 5,
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold'
  },
  countryStyle: {
    flex: 1,
    backgroundColor: '#f8ffff',
    borderTopColor: '#211f',
    borderTopWidth: 1,
    padding: 12,
  },
  closeButtonStyle: {
    padding: 12,
    alignItems: 'center', 
    backgroundColor: '#00aea7',
    width: 375,
    height: 60,
  },
  head : {
    marginTop:110,
    fontFamily: "Catamaran",
    fontSize: 26,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 30,
    letterSpacing: -0.42,
    textAlign: "center",
    color: "#00aea7",
    paddingTop:50
  },
  bg :{
    marginTop:380,
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
})


