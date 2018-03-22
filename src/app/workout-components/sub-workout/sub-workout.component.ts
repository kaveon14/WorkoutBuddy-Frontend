import { Component, OnInit } from '@angular/core';
import {SubWorkout} from "../../models/sub-workout";
import {WorkoutService} from "../../workout-service/workout.service";
import {ActivatedRoute} from "@angular/router";
import {ExerciseGoal} from "../../models/exercise-goals";
import {componentRefresh} from "@angular/core/src/render3/instructions";
import {falseIfMissing} from "protractor/built/util";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MainWorkout} from "../../models/main-workout";

@Component({
  selector: 'app-sub-workout',
  templateUrl: './sub-workout.component.html',
  styleUrls: ['./sub-workout.component.css']
})
export class SubWorkoutComponent implements OnInit {
  // TODO allow adding of sub workouts ???????
//add option to update mainworkout(update sw name,delete sw,update/delete mw) --- new components do same for subworkout in ex goals component(update sw name,delete sw,update.delete ex goals)
  sub_workout_list: SubWorkout[];
  exercise_goals: ExerciseGoal[];
  hide_form: boolean;
  hide_exercises: boolean;//new component
  formG: FormGroup;
  clickedSubWorkout: SubWorkout;

  constructor(private route: ActivatedRoute,private workoutService: WorkoutService,private fb: FormBuilder) {
    this.sub_workout_list = [];
    this.exercise_goals = [];
    this.hide_form = true;
    this.hide_exercises = true;//new component
    this.createForm();//should be on init
    this.clickedSubWorkout = null;
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

  showForm() {
    this.hide_form = false;
  }

  hideCreateSWForm() {
    this.hide_form = true;
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

  updateMainWorkoutName() {

  }

  updateSubWorkoutName() {

  }

  deleteSubWorkout() {//needs to remove sw from list
    this.workoutService.deleteSubWorkout(this.clickedSubWorkout).subscribe();
    this.hideExerciseGoals();
    this.exercise_goals = []
  }

  deleteMainWorkout() {
    const id = +this.route.snapshot.paramMap.get('id');
    let mainWorkout = new MainWorkout();
    mainWorkout.id = id;
    this.workoutService.deleteMainWorkout(mainWorkout).subscribe();
  }






  addExerciseGoal() {//new component
    //will be harder to do
  }

  updateExerciseGoals() {//new component

  }

  getExerciseGoals(subWorkout:SubWorkout) {//new component
    this.clickedSubWorkout = subWorkout;
    this.workoutService.getExerciseGoals(subWorkout.id).subscribe(r => {
        this.exercise_goals = r['RequestResponse'];
        console.log(r['RequestResponse']);
      }
    );
    this.hide_exercises = false;//new component
  }

  hideExerciseGoals() {//new component
    this.hide_exercises = true;
  }

/*
  deleteExerciseGoal(ex_goal:ExerciseGoal) {//new component
    let index = this.exercise_goals.indexOf(ex_goal);
    if (index > -1) {
      this.exercise_goals.splice(index, 1);
    }
    this.workoutService.deleteExerciseGoals(this.clickedSubWorkout,ex_goal).subscribe();
  }*/

}
