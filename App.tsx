import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Image, Keyboard } from 'react-native';
import { GoalAppComponent } from './src/UI/Components/GoalAppComponent';
import { createAppContainer } from 'react-navigation';
import { AppNavigator } from './src/UI/Navigation/AppNavigator';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import CameraComponent from './src/UI/Camera/CameraComponent';
import { MapComponent } from './src/UI/Map/MapComponent';
import { MapBoxComponent } from './src/UI/Map/MapBoxComponent';


const AppContainer = createAppContainer(AppNavigator)
export default function App() {
  return (
    <MapComponent />
    // <View style={styles.container}>

    //     <View style={styles.view1}>
    //       <TextInput style={styles.input} blurOnSubmit keyboardType="numeric"></TextInput>
    //       <View style={styles.button}>
    //         <Button title="Add Goal" onPress={() => console.log} />
    //       </View>
    //     </View>
    //   <View style={styles.view2}>
    //     <View style={styles.view3}></View>
    //     <View style={styles.view4}>
    //       <Image source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
    //         style={{ width: 100, height: 100 }} />
    //     </View>
    //   </View>

    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'space-evenly',
    // backgroundColor: "red",
    margin: 40,
    flexDirection: 'column',

  },
  // input: {
  //   flex:3,
  //   width: '60%'
  // },
  view1: {
    flex: 1,
    // backgroundColor: 'red',
    flexDirection: 'column',
    borderWidth: 1,
    margin:100
    // justifyContent: 'center',

  },
  input: {
    borderWidth: 1,
    height: 30,
    width: 100,
    margin: 10
  },
  button: {
    borderWidth: 1,
    margin: 10,
    backgroundColor: 'blue'
  },
  view2: {
    flex: 6,
    flexDirection: 'row',
  },
  view3: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  view4: {
    flex: 2,
    backgroundColor: 'blue'
  }
});


