import { Component, OnInit } from '@angular/core';
import {MainWorkout} from "../../models/main-workout";
import {WorkoutService} from "../../workout-service/workout.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-main-workout',
  templateUrl: './main-workout.component.html',
  styleUrls: ['./main-workout.component.css']
})
export class MainWorkoutComponent implements OnInit {

  main_workout_list: MainWorkout[];
  formG: FormGroup;
  hide_form: boolean;

  constructor(private fb: FormBuilder,private workoutService: WorkoutService) {
    this.main_workout_list = [];
    this.hide_form = true;
    this.createForm();
  }

  ngOnInit() {
    this.getMainWorkouts();
  }

  getMainWorkouts() {
    this.workoutService.getMainWorkouts().subscribe(main_workouts =>
      this.main_workout_list = main_workouts['RequestResponse']);
  }

  createForm() {
    this.formG = this.fb.group({
      main_workout_name:'',
    });
  }

  showMWForm() {
    this.hide_form = false;
  }

  createMainWorkout() {
    const model = this.formG.value;
    let mainWorkout = new MainWorkout();
    mainWorkout.main_workout_name = model.main_workout_name as string;
    this.workoutService.createMainWorkout(mainWorkout).subscribe(res => {
      mainWorkout.id = res['RequestResponse']['id'];
      this.main_workout_list.push(mainWorkout);
    });
    this.hide_form = true;
  }

}
