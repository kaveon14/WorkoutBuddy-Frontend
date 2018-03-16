import {SubWorkout} from "./sub-workout";

export class MainWorkout {
  id: number;
  profileId: number;
  main_workout_name: string;
  sub_workouts: SubWorkout[];
}
