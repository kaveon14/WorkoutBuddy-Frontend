import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {MainWorkout} from "../models/main-workout";
import {of} from "rxjs/observable/of";
import {SubWorkout} from "../models/sub-workout";
import {ExerciseGoal} from "../models/exercise-goals";
import {HttpTokenClient} from "../http-token-client";
import {Exercise} from "../models/exercise";

@Injectable()
export class WorkoutService {

  constructor(private tokenClient:HttpTokenClient) { }

  getMainWorkouts() {
    const url = 'http://127.0.0.1:8000/testWorkoutApi/getMainWorkouts';
    return this.tokenClient.get(url);
  }

  getSubWorkout(id:number) {
    const url = `http://127.0.0.1:8000/testWorkoutApi/getSubWorkout/?id=${id}`;
    console.log(id);
    return this.tokenClient.get(url);
  }

  getSubWorkouts(id: number) {
    const url = `http://127.0.0.1:8000/testWorkoutApi/getAllSubWorkouts/?mainWorkoutId=${id}`;
    return this.tokenClient.get(url);
  }

  getExerciseGoals(id: number) {
    const url = `http://127.0.0.1:8000/testWorkoutApi/getExerciseGoals/?subWorkoutId=${id}`;
    return this.tokenClient.get(url);
  }

  getExerciseGoal(id:number) {
    const url = `http://127.0.0.1:8000/testWorkoutApi/getSingleExGoal/?exGoalId=${id}`;
    return this.tokenClient.get(url);
  }

  createMainWorkout(mainWorkout: MainWorkout) {
    const url = 'http://127.0.0.1:8000/testWorkoutApi/createMainWorkout';
    let input = new FormData();
    input.append('main_workout_name',mainWorkout.main_workout_name);
    return this.tokenClient.post(url,input);
  }

  createSubWorkout(subWorkout: SubWorkout) {
    const url = 'http://127.0.0.1:8000/testWorkoutApi/createSubWorkout';
    let input = new FormData();
    input.append('mainWorkoutId',subWorkout.mainWorkoutId.toString());
    input.append('sub_workout_name',subWorkout.sub_workout_name);
    return this.tokenClient.post(url,input);
  }

  updateMainWorkoutName(mainWorkout:MainWorkout) {
    const url = 'http://127.0.0.1:8000/testWorkoutApi/updateMainWorkoutName';
    let input = new FormData();
    input.append('main_workout_name',mainWorkout.main_workout_name);
    return this.tokenClient.post(url,input);
  }

  updateSubWorkoutName(subWorkout:SubWorkout) {
    const url ='http://127.0.0.1:8000/testWorkoutApi/updateSubWorkoutName';
    let input = new FormData();
    input.append('sub_workout_name',subWorkout.sub_workout_name);
    return this.tokenClient.post(url,input);
  }

  deleteMainWorkout(mainWorkout:MainWorkout) {
    const url = 'http://127.0.0.1:8000/testWorkoutApi/deleteMainWorkout';
    let input = new FormData();
    input.append('id',mainWorkout.id.toString());
    return this.tokenClient.post(url,input);
  }

  deleteSubWorkout(subWorkout:SubWorkout) {
    const url = 'http://127.0.0.1:8000/testWorkoutApi/deleteSubWorkout';
    let input = new FormData();
    input.append('id',subWorkout.id.toString());
    return this.tokenClient.post(url,input);
  }

  updateExerciseGoals(ex_goal:ExerciseGoal) {
    const url = 'http://127.0.0.1:8000/testWorkoutApi/pl';
    let input = new FormData();
    input.append('id',ex_goal.id.toString());
    input.append('exercise_id',ex_goal.exercise_id.toString());
    input.append('default_exercise',ex_goal.default_exercise+'');
    input.append('goal_sets',ex_goal.goal_sets.toString());
    input.append('goal_reps',ex_goal.goal_reps);
    return this.tokenClient.post(url,input);
  }
//dont worry about right now
  /*
  addExerciseGoals(subWorkout:SubWorkout): Observable<SubWorkout> {
    const url = 'http://127.0.0.1:8000/testWorkoutApi/addExerciseGoals';
    return this.http.post<SubWorkout>(url,subWorkout,postOptions);
  }*/


  deleteExerciseGoals(ex_goal:ExerciseGoal) {
    const url = 'http://127.0.0.1:8000/testWorkoutApi/deleteExerciseGoals';
    let input = new FormData();
    input.append('id',ex_goal.id.toString());
    return this.tokenClient.post(url,input);
  }

  getCompletedWorkouts() {
    const url = 'http://127.0.0.1:8000/testWorkoutApi/getCompletedWorkouts';
    return this.tokenClient.get(url);
  }

  getAllExercises(): Observable<Exercise[]> {
    const url = 'http://127.0.0.1:8000/testExerciseApi/getAllExercises';
    let exercise_list_object: Exercise[] = [];
    return this.tokenClient.getObservableType(url,exercise_list_object);
  }


}
