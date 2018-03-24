import { Component, OnInit } from '@angular/core';
import {ExerciseGoal} from "../../models/exercise-goals";
import {ActivatedRoute} from "@angular/router";
import {WorkoutService} from "../../workout-service/workout.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Exercise} from "../../models/exercise";
//basically finished
@Component({
  selector: 'app-exercise-goal-details',
  templateUrl: './exercise-goal-details.component.html',
  styleUrls: ['./exercise-goal-details.component.css']
})
export class ExerciseGoalDetailsComponent implements OnInit {
//TODO fix bug in selector, can't choose ab crunch/first element for some reason
  ex_goal: ExerciseGoal;
  temp_ex_goal: ExerciseGoal;
  formG: FormGroup;
  ex_list: Exercise[];
  update: boolean;

  constructor(private workoutService: WorkoutService,private route: ActivatedRoute,private fb: FormBuilder) {
    this.update = false;
    this.createForm();
  }

  ngOnInit() {
    this.getExerciseGoal();
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

  prepareToUpdate() {
    this.update = true;
    this.temp_ex_goal = new ExerciseGoal();
    let ex = this.ex_list[0];
    if(ex.default_exercise) {
      this.temp_ex_goal.default_exercise = true;
    } else {
      this.temp_ex_goal.default_exercise = false;
    }
    this.temp_ex_goal.id = this.ex_goal.id;
    this.temp_ex_goal.exercise_id = ex.id;
    this.temp_ex_goal.exercise_name = ex.exercise_name;
    this.temp_ex_goal.goal_reps = this.ex_goal.goal_reps;
    this.temp_ex_goal.goal_sets = this.ex_goal.goal_sets;

  }

  getExerciseGoal() {
    const id = +this.route.snapshot.paramMap.get('id');
    return this.workoutService.getExerciseGoal(id).subscribe(res => {
      this.ex_goal = res['RequestResponse'];
    })
  }

  saveExGoalChanges() {
    this.update = false;
    this.setRepRange();
    this.updateExerciseGoals();
    console.log(this.temp_ex_goal);
    this.workoutService.updateExerciseGoals(this.temp_ex_goal).subscribe();
  }

  deleteExerciseGoal() {//say ex_goal deleted
    this.update = false;
    this.workoutService.deleteExerciseGoals(this.ex_goal).subscribe();
  }

  updateExerciseGoals() {
    this.ex_goal = this.temp_ex_goal;
  }

  setExercise(index:number) {
    let ex = this.ex_list[index];
    this.temp_ex_goal.exercise_name = ex.exercise_name;
    if(ex.default_exercise) {
      this.temp_ex_goal.default_exercise = true;
    } else {
      this.temp_ex_goal.default_exercise = false;
    }
    this.temp_ex_goal.id = this.ex_goal.id;
    this.temp_ex_goal.exercise_id = ex.id
  }

  setSetAmount(goal_sets:number) {
    this.temp_ex_goal.goal_sets = goal_sets;
  }

  setRepRange() {
    const model = this.formG.value;
    let reps = model.reps as string;
    if(reps !== '') {
      this.temp_ex_goal.goal_reps = model.reps as string;
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
