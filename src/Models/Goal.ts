import { GoalStatus } from "./GoalStatus";

export default interface IGoal {
  id: string;
  title: string;
  status: GoalStatus;
  description?: string;
}
