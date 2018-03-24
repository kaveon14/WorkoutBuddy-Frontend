import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Exercise} from "../../models/exercise";
import {WorkoutService} from "../../workout-service/workout.service";
import {ExerciseGoal} from "../../models/exercise-goals";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-create-exercise-goal',
  templateUrl: './create-exercise-goal.component.html',
  styleUrls: ['./create-exercise-goal.component.css']
})
export class CreateExerciseGoalComponent implements OnInit {

  ex_goal: ExerciseGoal;
  formG: FormGroup;
  ex_list: Exercise[];
  update: boolean;

  constructor(private workoutService: WorkoutService,private fb: FormBuilder,
              private route: ActivatedRoute) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ex_goal = new ExerciseGoal();
    this.ex_goal.exercise_name = 'Exercise Name';
    this.ex_goal.subWorkout_id = id;
  }

  ngOnInit() {
    this.createForm();
    this.getExercises();
  }

  createForm() {
    this.formG = this.fb.group({
      reps:'',
    })
  }

  getExercises() {
    this.workoutService.getAllExercises().subscribe(res => {
      this.ex_list = res['RequestResponse'];
    })
  }

  createExerciseGoal() {
    this.workoutService.addExerciseGoals(this.ex_goal).subscribe();
  }

  setExercise(index:number) {
    let ex = this.ex_list[index];
    this.ex_goal.exercise_name = ex.exercise_name;
    if(ex.default_exercise) {
      this.ex_goal.default_exercise = true;
    } else {
      this.ex_goal.default_exercise = false;
    }
    this.ex_goal.exercise_id = ex.id
  }

  setSetAmount(goal_sets:number) {
    this.ex_goal.goal_sets = goal_sets;
  }

  setRepRange() {
    const model = this.formG.value;
    let reps = model.reps as string;
    if(reps !== '') {
      this.ex_goal.goal_reps = model.reps as string;
    }
  }

  getRangeArray() {
    let range = [];
    for(let x = 0;x < 15; x++) {
      range[x] = x + 1;
    }
    return range;
  }

}
