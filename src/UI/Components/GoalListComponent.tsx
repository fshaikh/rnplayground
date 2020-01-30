import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import IGoal from "../../Models/Goal";
import { GoalSummaryComponent } from "./GoalSummaryComponent";
import { OnGoalDeleted } from "../Types/types";

interface GoalListComponentProps {
  goals: IGoal[];
  goalDeleted: OnGoalDeleted;
}

export const GoalListComponent = (props: GoalListComponentProps) => {
  return (
    <View>
      <Text style={styles.text}>number of Goals: {props.goals.length}</Text>
      <FlatList
        style={styles.list}
        data={props.goals}
        renderItem={listItem => (
          <GoalSummaryComponent
            goal={listItem.item}
            goalDeleted={id => props.goalDeleted(id)}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1
  },
  list: {
    flex: 2
  }
});
