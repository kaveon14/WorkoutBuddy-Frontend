import {Exercise} from "./exercise";
import {ExerciseGoal} from "./exercise-goals";

export class SubWorkout {
  id: number;
  profileId: number;
  mainWorkoutId: number;
  sub_workout_name: string;
  exercise_list: Exercise[];
  exercise_goals: ExerciseGoal[];
}
