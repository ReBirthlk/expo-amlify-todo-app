import React from "react";
import { View, StyleSheet,Text,Button,StatusBar,TextInput,TouchableOpacity,Picker} from "react-native";
import {Icon} from 'native-base'

export class Language extends React.Component {

  static navigationOptions = {
      header: null
  };
  
  state = {  
            choosenIndex: 0  
    };

  render() {
    return (
        <View style={styles.container}>
           <StatusBar backgroundColor="#00aea7" />
        <Text style={styles.head}>Select Language</Text>
        
        <View style={styles.rectangle147}>
        
        <Picker style={styles.language} 
            selectedValue={this.state.language}  
            onValueChange={(itemValue) =>  
                this.setState({language: itemValue})}  >  
                    <Picker.Item label="Language" value="Language" />  
                    <Picker.Item label="Afrikaans" value="af" />  
                    <Picker.Item label="Albanian" value="sq" />
                    <Picker.Item label="Amharic" value="am" /> 
                    <Picker.Item label="Arabic" value="ar" />  
                    <Picker.Item label="Armenian" value="hy" />  
                    <Picker.Item label="Azerbaijani" value="az" />  
                    <Picker.Item label="Basque" value="eu" />  
                    <Picker.Item label="Belarusian" value="be" />  
                    <Picker.Item label="Bengali" value="bn" />  
                    <Picker.Item label="Bosnian" value="bs" />  
                    <Picker.Item label="Bulgarian" value="bg" />                       
                    <Picker.Item label="Catalan" value="ca" />  
                    <Picker.Item label="Cebuano" value="ced" /> 
                    <Picker.Item label="Chichewa" value="ny" />  
                    <Picker.Item label="Chinese Simplified" value="zh-cn" />   
                    <Picker.Item label="Chinese Traditional" value="zh-tw" />  
                    <Picker.Item label="Corsican" value="co" />  
                    <Picker.Item label="Croatian" value="hr" />  
                    <Picker.Item label="Czech" value="cs" />  
                    <Picker.Item label="Danish" value="da" />  
                    <Picker.Item label="Dutch" value="nl" />  
                    <Picker.Item label="English" value="en" />  
                    <Picker.Item label="Esperanto" value="eo" />  
                    <Picker.Item label="Estonian" value="et" />  
                    <Picker.Item label="Filipino" value="tl" />  
                    <Picker.Item label="Finnish" value="fi" />  
                    <Picker.Item label="French" value="fr" />  
                    <Picker.Item label="Frisian" value="fy" />  
                    <Picker.Item label="Galician" value="gl" />  
                    <Picker.Item label="Georgian" value="ka" />  
                    <Picker.Item label="German" value="de" />  
                    <Picker.Item label="Greek" value="el" />  
                    <Picker.Item label="Gujarati" value="gu" />  
                    <Picker.Item label="Haitian Creole" value="ht" />  
                    <Picker.Item label="Hausa" value="ha" />  
                    <Picker.Item label="Hawaiian" value="haw" />  
                    <Picker.Item label="Hebrew" value="iw" />  
                    <Picker.Item label="Hindi" value="hi" />  
                    <Picker.Item label="Hmong" value="hmn" />  
                    <Picker.Item label="Hungarian" value="hu" />  
                    <Picker.Item label="Icelandic" value="is" />  
                    <Picker.Item label="Igbo" value="ig" />  
                    <Picker.Item label="Indonesian" value="id" />  
                    <Picker.Item label="Irish" value="ga" />  
                    <Picker.Item label="Italian" value="it" />  
                    <Picker.Item label="Japanese" value="ja" />  
                    <Picker.Item label="Javanese" value="jw" />  
                    <Picker.Item label="Kannada" value="kn" />  
                    <Picker.Item label="Kazakh" value="kk" />  
                    <Picker.Item label="Khmer" value="km" />  
                    <Picker.Item label="Korean" value="ko" />  
                    <Picker.Item label="Kurdish (Kurmanji)" value="ku" />
                    <Picker.Item label="Kyrgyz" value="ky" />
                    <Picker.Item label="Lao" value="lo" />
                    <Picker.Item label="Latin" value="la" />
                    <Picker.Item label="Latvian" value="lv" />  
                    <Picker.Item label="Lithuanian" value="lt" />
                    <Picker.Item label="Luxembourgish" value="lb" />
                    <Picker.Item label="Macedonian" value="mk" />
                    <Picker.Item label="Malagasy" value="mg" />
                    <Picker.Item label="Malay" value="ms" />
                    <Picker.Item label="Malayalam" value="ml" />
                    <Picker.Item label="Maltese" value="mt" />
                    <Picker.Item label="Maori" value="mi" />
                    <Picker.Item label="Marathi" value="mr" />
                    <Picker.Item label="Mongolian" value="mn" />
                    <Picker.Item label="Myanmar (Burmese)" value="my" />
                    <Picker.Item label="Nepali" value="ne" />
                    <Picker.Item label="Norwegian" value="no" />
                    <Picker.Item label="Pashto" value="ps" />
                    <Picker.Item label="Persian" value="fa" />
                    <Picker.Item label="Polish" value="pl" />
                    <Picker.Item label="Portuguese" value="pt" />
                    <Picker.Item label="Punjabi" value="ma" />
                    <Picker.Item label="Romanian" value="ro" />
                    <Picker.Item label="Russian" value="ru" />
                    <Picker.Item label="Samoan" value="sm" />
                    <Picker.Item label="Scots Gaelic" value="gd" />
                    <Picker.Item label="Serbian" value="sr" />
                    <Picker.Item label="Sesotho" value="st" />
                    <Picker.Item label="Shona" value="sn" />
                    <Picker.Item label="Sindhi" value="sd" />
                    <Picker.Item label="Sinhala" value="si" />
                    <Picker.Item label="Slovak" value="sk" />
                    <Picker.Item label="Slovenian" value="sl" />
                    <Picker.Item label="Somali" value="so" />
                    <Picker.Item label="Spanish" value="es" />
                    <Picker.Item label="Sundanese" value="su" />
                    <Picker.Item label="Swahili" value="sw" />
                    <Picker.Item label="Swedish" value="sv" />
                    <Picker.Item label="Tajik" value="tg" />
                    <Picker.Item label="Tamil" value="ta" />
                    <Picker.Item label="Telugu" value="te" />
                    <Picker.Item label="Thai" value="th" />
                    <Picker.Item label="Turkish" value="tr" />
                    <Picker.Item label="Ukrainian" value="uk" />
                    <Picker.Item label="Urdu" value="ur" />
                    <Picker.Item label="Uzbek" value="uz" />
                    <Picker.Item label="Vietnamese" value="vi" />
                    <Picker.Item label="Welsh" value="cy" />
                    <Picker.Item label="Xhosa" value="xh" />
                    <Picker.Item label="Yiddish" value="yi" />
                    <Picker.Item label="Yoruba" value="yo" />
                    <Picker.Item label="Zulu" value="zu" />
        </Picker>  
        </View>
        <View style={styles.bg}><TouchableOpacity>
        <Text style={styles.next}>Next</Text>
        </TouchableOpacity></View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
        width: 375,
        height: 812,
        backgroundColor: "#f8ffff"
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
    paddingTop:50,
    paddingRight:10
  },
  rectangle147 : {
    marginTop:30,
    width: 300,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgba(0, 174, 167, 0.2)",
    marginLeft:30,
  },
  next : {
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
  bg :{
    marginTop:420,
    width: 360,
    height: 60,
    backgroundColor: "#00aea7",
    borderTopRightRadius: 70   
  },
  input: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000000', 
  },
  iconStyle: {
    color: '#00aea7',
    fontSize: 28,
    marginLeft: 264,
    marginTop:-37
  },
  language:{
    fontFamily: "Catamaran",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 23,
    letterSpacing: 0,
    textAlign: "left",
    color: "#00aea7",
    paddingLeft:20
  }
});