/**
 * Shows the add goal UI in a modal dialog
 */

import React, { useState } from "react";
import { View, Modal, Text, Button, TextInput } from "react-native";

interface OnCloseFunc {
  (): void;
}
interface IModalComponentProps {
  show: boolean;
  onClose: OnCloseFunc;
}
export const ModalComponent = (props: IModalComponentProps) => {
  return (
    <Modal visible={props.show} animationType="slide">
      <View style={{ marginTop: 200 }}>
        <TextInput>Show</TextInput>
        <Button title="Ok" onPress={props.onClose}></Button>
        <Button title="Cancel" onPress={props.onClose}></Button>
        <Button title="New" onPress={props.onClose}></Button>
      </View>
    </Modal>
  );
};
