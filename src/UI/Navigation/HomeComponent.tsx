import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

type Props = {
  navigation: NavigationStackProp<{ title: string }>;
};

export class HomeComponent extends React.Component<Props> {
  static navigationOptions = {
    title: "Home Screen"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Second Scrren"
          onPress={() =>
            this.props.navigation.navigate("Second", {
              title: "I have come here via React Navigation"
            })
          }
        />
      </View>
    );
  }
}
