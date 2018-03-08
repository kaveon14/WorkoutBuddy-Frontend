import { Component, OnInit } from '@angular/core';
import {Workout} from "../../models/workout";
import {WorkoutService} from "../../workout-service/workout.service";
import {WorkoutExercise} from "../../models/workout-exercise";

@Component({
  selector: 'app-completed-workouts',
  templateUrl: './completed-workouts.component.html',
  styleUrls: ['./completed-workouts.component.css']
})
export class CompletedWorkoutsComponent implements OnInit {

  workouts: Workout[];
  clicked_workout: Workout;
  ex: WorkoutExercise[];
  hide_workout: boolean;

  constructor(private workoutService: WorkoutService) {
    this.hide_workout = true;
    this.clicked_workout = null;
    this.ex = [];
  }

  ngOnInit() {
    this.getCompletedWorkouts();
  }

  getCompletedWorkouts() {
    this.workoutService.getCompletedWorkouts().subscribe(res =>
      this.workouts = res['RequestResponse']);
  }

  getWorkout(workout: Workout) {
    this.hide_workout = false;
    this.clicked_workout = workout;
    this.ex = workout.completed_exercises;
  }

  revert() {
    this.hide_workout = true;
  }

}
