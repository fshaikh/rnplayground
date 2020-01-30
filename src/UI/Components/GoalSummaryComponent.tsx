import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import IGoal from "../../Models/Goal";
import { OnGoalDeleted } from "../Types/types";

interface GoalSummaryProps {
  goal: IGoal;
  goalDeleted: OnGoalDeleted;
}
export const GoalSummaryComponent = (props: GoalSummaryProps) => {
  return (
    <TouchableHighlight onPress={() => props.goalDeleted(props.goal.id)}>
      <View style={styles.listItem}>
        <Text>{props.goal.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  }
});
