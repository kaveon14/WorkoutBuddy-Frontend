import {Exercise} from "./exercise";

export class SubWorkout {
  id: number;
  profileId: number;
  mainWorkoutId: number;
  sub_workout_name: string;
  exercise_list: Exercise[];
}
