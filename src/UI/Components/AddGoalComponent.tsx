/**
 * Handles adding of the component
 */

import React, { useState } from "react";
import { Button, View, TextInput } from "react-native";

interface OnGoalAddFunc {
  (): void;
}
interface AddGoalComponentProps {
  OnGoalAdd: OnGoalAddFunc;
}
export const AddGoalComponent = (props: AddGoalComponentProps) => {
  // const [title, setTitle] = useState('');

  return (
    <View>
      {/* <TextInput placeholder="Enter goal here and press + button"
                 onChangeText={text => setTitle(text)}
                 defaultValue=''
                 style={{borderColor:'black', borderWidth:1, padding: 10,width:'80%'}}/>    */}
      <Button
        title="Add New Goal"
        onPress={() => {
          props.OnGoalAdd();
        }}
      />
    </View>
  );
};
