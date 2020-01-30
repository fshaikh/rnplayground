import React from "react";
import { View, Text } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

type Props = {
  navigation: NavigationStackProp<{ title: string }>;
};

export class SecondComponent extends React.Component<Props> {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "Second Screen"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{this.props.navigation.getParam("title")}</Text>
      </View>
    );
  }
}
