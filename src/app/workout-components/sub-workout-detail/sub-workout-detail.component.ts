import { Component, OnInit } from '@angular/core';
import {SubWorkout} from "../../models/sub-workout";
import {ActivatedRoute} from "@angular/router";
import {WorkoutService} from "../../workout-service/workout.service";
import {ExerciseGoal} from "../../models/exercise-goals";

@Component({
  selector: 'app-exercise-goals',//may need to change name,not sure
  templateUrl: './sub-workout-detail.component.html',
  styleUrls: ['./sub-workout-detail.component.css']
})
export class SubWorkoutDetailComponent implements OnInit {

  clickedSubWorkout: SubWorkout;
  exercise_goals: ExerciseGoal[];

  constructor(private route: ActivatedRoute,private workoutService: WorkoutService) {
    this.exercise_goals = [];
  }

  ngOnInit() {
    this.getClickedSubWorkout().subscribe(res => {
      this.clickedSubWorkout = res['RequestResponse'];
      this.getExerciseGoals(this.clickedSubWorkout);
    });
  }

  getClickedSubWorkout() {
    const id = +this.route.snapshot.paramMap.get('id');
    return this.workoutService.getSubWorkout(id);
  }

  getExerciseGoals(subWorkout: SubWorkout) {
    this.workoutService.getExerciseGoals(subWorkout.id).subscribe(res => {
        this.exercise_goals = res['RequestResponse'];
      }
    );
  }

  addExerciseGoals() {//keep , use popup window for adding new ex goal,just like the update shit

  }


  deleteSubWorkout() {
    this.workoutService.deleteSubWorkout(this.clickedSubWorkout).subscribe();
  }

}
