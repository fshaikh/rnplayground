import React from "react";
import { View, Button, Modal } from "react-native";
import { ModalComponent } from "./Modal";

interface IProps {}
interface IState {
  show: boolean;
}
export class Client extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    return (
      <View>
        <Button title="Open Modal" onPress={() => this.open()} />
        <ModalComponent show={this.state.show} onClose={() => console.log()} />
      </View>
    );
  }

  private open() {
    this.setState({ show: true });
  }
}
