import IGoal from "../Models/Goal";
import { GoalDAL } from "../DAL/GoalDAL";

export default class GoalRepository {
  private _goalDAL: GoalDAL;
  constructor() {
    this._goalDAL = new GoalDAL();
  }
  /**
   * Returns a list of goals
   */
  public async getGoals(): Promise<IGoal[]> {
    return await this._goalDAL.getGoals();
  }

  public async addGoal(goal: IGoal): Promise<boolean> {
    return await this._goalDAL.addGoal(goal);
  }

  public async deleteGoal(goalId: string): Promise<boolean> {
    return await this._goalDAL.deleteGoal(goalId);
  }
}
