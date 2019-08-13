import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "native-base";

export class Header extends React.Component {
  render() {
    return (
      <View style={styles.rectangle3}>
        <View style={{ flexDirection: "row", justifyContent: "flex-start",paddingTop:5}}>
          <Icon
            style={styles.icon_menu}
            name="md-menu"
            size={30}
            color='green'
          />
          <Text
            style={{
              paddingLeft: 141,
              fontSize: 20,
              color: "#ffffff",
              fontFamily: "HelveticaNeue",
              fontWeight: "bold"
            }}
          >
            Schedule
          </Text>
          <Icon
            style={styles.icon_pluscricle}
            name="md-add-circle"
            size={30}
            color="green"
          />
        </View>
        <Text style={styles.date}>12,AUG 2019</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  icon_pluscricle: {
    paddingStart: 133
  },
  icon_menu: {
    paddingLeft: 5
  },
  rectangle3: {
    width: 412,
    height: 175,
    backgroundColor: "#fcb69f"
  },

  schedule: {
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  },
  date: {
    fontFamily: "HelveticaNeue",
    fontSize: 18,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  }
});
