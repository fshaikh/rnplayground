import GoalRepository from "../Repository/GoalRepository";
import IGoal from "../Models/Goal";

export class GoalService {
  private _goalRepository: GoalRepository;
  private DELAY: number = 200;
  constructor() {
    this._goalRepository = new GoalRepository();
  }

  public async addGoal(goal: IGoal): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(async () => {
        const response = await this._goalRepository.addGoal(goal);
        resolve(response);
      }, this.DELAY);
    });
  }

  public async getGoals(): Promise<IGoal[]> {
    return new Promise(resolve => {
      setTimeout(async () => {
        const response = await this._goalRepository.getGoals();
        resolve(response);
      }, this.DELAY);
    });
  }

  public async deleteGoal(id: string): Promise<boolean> {
    return await this._goalRepository.deleteGoal(id);
  }

  public async getMovies() {
    try {
      const response: Response = await fetch(
        "https://facebook.github.io/react-native/movies.json"
      );
      const movies = await response.json();
    } catch (e) {
      console.log(e);
    }
  }
}
