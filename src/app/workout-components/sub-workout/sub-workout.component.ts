import { Component, OnInit } from '@angular/core';
import {SubWorkout} from "../../models/sub-workout";
import {WorkoutService} from "../../workout-service/workout.service";
import {ActivatedRoute} from "@angular/router";
import {ExerciseGoals} from "../../models/exercise-goals";
import {componentRefresh} from "@angular/core/src/render3/instructions";
import {falseIfMissing} from "protractor/built/util";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sub-workout',
  templateUrl: './sub-workout.component.html',
  styleUrls: ['./sub-workout.component.css']
})
export class SubWorkoutComponent implements OnInit {

  sub_workout_list: SubWorkout[];
  exercise_goals: ExerciseGoals[];
  hide_form: boolean;
  hide_exercises: boolean;
  formG: FormGroup;

  constructor(private route: ActivatedRoute,private workoutService: WorkoutService,private fb: FormBuilder) {
    this.sub_workout_list = [];
    this.exercise_goals = [];
    this.hide_exercises = false;
    this.hide_form = true;
    this.createForm();
  }

  ngOnInit() {
    this.getSubWorkouts()
  }

  createForm() {
    this.formG = this.fb.group({
      sub_workout_name:'',
    });
  }

  getSubWorkouts() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.workoutService.getSubWorkouts(id).subscribe(r =>
      this.sub_workout_list = r['RequestResponse']);
  }

  getExerciseGoals(id: number) {
    this.workoutService.getExerciseGoals(id).subscribe(r => {
      this.exercise_goals = r['RequestResponse'];
      console.log(r['RequestResponse']);
  }
    );
    this.hide_exercises = true;
  }

  hideExerciseGoals() {
    this.hide_exercises = false;
  }

  hideCreateSWForm() {
    this.hide_form = false;
  }

  createSubWorkout() {
    const id = +this.route.snapshot.paramMap.get('id');
    const model = this.formG.value;
    let subWorkout = new SubWorkout();
    subWorkout.sub_workout_name = model.sub_workout_name as string;
    subWorkout.mainWorkoutId = id;
    this.workoutService.createSubWorkout(subWorkout).subscribe(res => {
      subWorkout.id =res['RequestResponse']['id'];
      this.sub_workout_list.push(subWorkout);
    });
    this.hide_form = true;
  }

}
