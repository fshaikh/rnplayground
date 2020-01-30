import React, { useState } from "react";
import { View, Modal, Button, TextInput } from "react-native";

interface OnGoalAddFunc {
  (title: string): void;
}
interface IAddGoalFormComponentProps {
  show: boolean;
  OnGoalAdd: OnGoalAddFunc;
}

export const AddGoalFormComponent = (props: IAddGoalFormComponentProps) => {
  const [title, setTitle] = useState("");

  return (
    <Modal visible={props.show} animationType="slide">
      <View style={{ marginTop: 200 }}>
        <TextInput
          placeholder="Enter goal here"
          onChangeText={text => setTitle(text)}
          defaultValue=""
          style={{
            borderColor: "black",
            borderWidth: 1,
            padding: 10,
            width: "80%"
          }}
        />
        <Button
          title="Add"
          onPress={() => {
            props.OnGoalAdd(title);
            setTitle("");
          }}
        />
      </View>
    </Modal>
  );
};
