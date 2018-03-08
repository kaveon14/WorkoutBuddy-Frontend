import {WorkoutExercise} from "./workout-exercise";

export class Workout {
  id:number;
  main_workout_name: string;
  sub_workout_name: string;
  date: string;
  completed_exercises: WorkoutExercise[];
}
