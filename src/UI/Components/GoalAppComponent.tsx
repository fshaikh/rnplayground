import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { GoalService } from "../../Services/GoalService";
import { LoadingComponent } from "./LoadingComponent";
import IGoal from "../../Models/Goal";
import { EmptyGoalComponent } from "./EmptyGoalComponent";
import { GoalListComponent } from "./GoalListComponent";
import { AddGoalComponent } from "./AddGoalComponent";
import { getUniqueId } from "../../Services/IdService";
import { GoalStatus } from "../../Models/GoalStatus";
import { ModalComponent } from "./ModalComponent";
import { AddGoalFormComponent } from "./AddGoalFormComponent";

interface IGoalAppComponentProps {}

interface IGoalAppComponentState {
  loading: boolean;
  goals: IGoal[];
  showGoalUI: boolean;
}

export class GoalAppComponent extends React.Component<
  IGoalAppComponentProps,
  IGoalAppComponentState
> {
  private _goalService: GoalService;

  constructor(props) {
    super(props);
    this._goalService = new GoalService();
    // ALWAYS NAME IT AS state
    this.state = {
      loading: true,
      goals: [],
      showGoalUI: false
    };
  }

  async componentDidMount() {
    const goals = await this._goalService.getGoals();
    this.setState({
      loading: false,
      goals: goals
    });
  }

  render() {
    const component = this.getComponentToRender();
    return (
      <View style={{ marginTop: 200 }}>
        <View style={styles.add}>
          <AddGoalComponent OnGoalAdd={() => this.showAddGoalUI()} />
        </View>

        <AddGoalFormComponent
          show={this.state.showGoalUI}
          OnGoalAdd={title => this.addGoal(title)}
        />
        <View style={styles.goals}>{component}</View>
      </View>
    );
  }

  private getComponentToRender() {
    if (this.state.loading) {
      return <LoadingComponent />;
    }

    if (this.state.goals.length === 0) {
      return <EmptyGoalComponent />;
    }

    return (
      <GoalListComponent
        goals={this.state.goals}
        goalDeleted={id => this.deleteGoal(id)}
      />
    );
  }

  private showAddGoalUI() {
    this.setState({ showGoalUI: true });
  }
  private async addGoal(title: string) {
    this.setState({ showGoalUI: false });

    const goal: IGoal = {
      id: getUniqueId(),
      title: title,
      status: GoalStatus.Active
    };
    await this._goalService.addGoal(goal);
    this.setState((prevState: IGoalAppComponentState) => {
      return {
        goals: [...prevState.goals, goal]
      };
    });
  }

  private async deleteGoal(id: string) {
    const response = await this._goalService.deleteGoal(id);
    this.setState((prev: IGoalAppComponentState) => {
      const newGoals = prev.goals.filter(goal => goal.id !== id);
      return {
        goals: newGoals
      };
    });
  }
}

const styles = StyleSheet.create({
  add: {
    flex: 1
  },
  goals: {
    flex: 1
  }
});
