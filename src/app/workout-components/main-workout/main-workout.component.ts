import { Component, OnInit } from '@angular/core';
import {MainWorkout} from "../../models/main-workout";
import {WorkoutService} from "../../workout-service/workout.service";

@Component({
  selector: 'app-main-workout',
  templateUrl: './main-workout.component.html',
  styleUrls: ['./main-workout.component.css']
})
export class MainWorkoutComponent implements OnInit {


  main_workout_list: MainWorkout[];

  constructor(private workoutService: WorkoutService) {
    this.main_workout_list = [];
  }

  ngOnInit() {
    this.getMainWorkouts();
  }

  getMainWorkouts() {
    this.workoutService.getMainWorkouts().subscribe(main_workouts =>
      this.main_workout_list = main_workouts['RequestResponse']);
  }

}
