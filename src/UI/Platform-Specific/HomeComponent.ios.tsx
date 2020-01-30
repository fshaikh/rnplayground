import React from "react";
import { View, Text, Button } from "react-native";

export class HomeComponent extends React.Component {
  static navigationOptions = {
    title: "Home Screen"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>iOS</Text>
      </View>
    );
  }
}
