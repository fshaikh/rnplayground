import IGoal from "../Models/Goal";
import { string } from "prop-types";

export class GoalDAL {
  private _goals: Map<string, IGoal>;
  constructor() {
    this._goals = new Map<string, IGoal>();
  }

  public async getGoals(): Promise<IGoal[]> {
    return new Promise(resolve => {
      const goals = [];
      const goalsMap = this._goals.entries().next();
      while (!goalsMap.done) {
        const v = goalsMap.value;
        goals.push(goalsMap.value[1]);
      }
      resolve(goals);
    });
  }

  public async addGoal(goal: IGoal): Promise<boolean> {
    return new Promise(resolve => {
      this._goals.set(goal.id, goal);
      resolve(true);
    });
  }

  public async deleteGoal(goalId: string): Promise<boolean> {
    return new Promise(resolve => {
      this._goals.delete(goalId);
      resolve(true);
    });
  }
}
