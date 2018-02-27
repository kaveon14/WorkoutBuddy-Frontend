import { Component, OnInit } from '@angular/core';
import {SubWorkout} from "../../models/sub-workout";
import {WorkoutService} from "../../workout-service/workout.service";
import {ActivatedRoute} from "@angular/router";
import {ExerciseGoals} from "../../models/exercise-goals";
import {componentRefresh} from "@angular/core/src/render3/instructions";
import {falseIfMissing} from "protractor/built/util";

@Component({
  selector: 'app-sub-workout',
  templateUrl: './sub-workout.component.html',
  styleUrls: ['./sub-workout.component.css']
})
export class SubWorkoutComponent implements OnInit {

  sub_workout_list: SubWorkout[];
  exercise_goals: ExerciseGoals[];

  d: boolean;

  constructor(private route: ActivatedRoute,private workoutService: WorkoutService) {
    this.sub_workout_list = [];
    this.exercise_goals = [];
    this.d = true;
  }

  ngOnInit() {
    this.getSubWorkouts()
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
    this.d = false;
  }

  flip() {
    this.d = true;
  }

}
