import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";

export class Body extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            padding: 5
          }}
        >
          <Text style={styles.Today}>Today </Text>
          <Icon style={styles.Icon1} name="md-more" size={30} color="green" />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 5
          }}
        >
          <Icon
            style={{ paddingLeft: 5 }}
            name="md-checkmark-circle"
            size={30}
            color="green"
          />
          <Text>8.00</Text>
          <View style={styles.rectangle12}>
            <Text style={styles.tasks}>walk with a Dog</Text>
            <Text style={styles.category}>Personals</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10
          }}
        >
          <Icon
            style={{ paddingLeft: 5 }}
            name="md-checkmark-circle"
            size={30}
            color="green"
          />
          <Text>8.45</Text>
          <View style={styles.rectangle12}>
            <Text style={styles.tasks}>Buy apple, milk and bread</Text>
            <Text style={styles.category}>Shoping</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0"
  },
  Icon1: {
    paddingStart: 220
  },
  Today: {
    paddingStart:30,
    fontFamily: "HelveticaNeue",
    fontSize: 28,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0.01,
    color: "green"
  },

  rectangle12: {
    width: 250,
    height: 94,
    borderRadius: 20,
    backgroundColor: "#fcb69f",
    paddingStart: 20
  },

  tasks: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#ffffff"
  },
  category: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#ffffff"
  }
});
