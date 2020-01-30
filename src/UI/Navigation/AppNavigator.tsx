import { createStackNavigator } from "react-navigation-stack";
import { HomeComponent } from "./HomeComponent";
import { SecondComponent } from "./SecondComponent";

export const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeComponent
    },
    Second: {
      screen: SecondComponent
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);
