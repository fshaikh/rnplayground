/**
 * Shows the add goal UI in a modal dialog
 */

import React, { useState } from "react";
import { View, Modal, Text, Button } from "react-native";

interface OnCloseFunc {
  (): void;
}
interface IModalComponentProps {
  show: boolean;
  children: any;
  onClose: OnCloseFunc;
}
export const ModalComponent = (props: IModalComponentProps) => {
  return (
    <View style={{ marginTop: 100 }}>
      <Modal visible={props.show} animationType="slide">
        <View style={{ marginTop: 200 }}>
          {props.children}
          <Button title="Ok" onPress={props.onClose}></Button>
        </View>
      </Modal>
    </View>
  );
};
