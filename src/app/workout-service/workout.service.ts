import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {MainWorkout} from "../models/main-workout";
import {catchError} from "rxjs/operators";
import {ProfileService} from "../user-profile-service/profile.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {of} from "rxjs/observable/of";
import {SubWorkout} from "../models/sub-workout";
import {ExerciseGoal} from "../models/exercise-goals";
import {Workout} from "../models/workout";

const postOptions = {
  headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'},)
};

@Injectable()
export class WorkoutService {

  constructor(private http: HttpClient,private profileService: ProfileService) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getMainWorkouts(): Observable<MainWorkout[]> {
    const url = 'http://127.0.0.1:8000/testWorkoutApi/getMainWorkouts';
    let input = new FormData();
    input.append('profileId',this.profileService.profileId.toString());
    return this.http.post<MainWorkout[]>(url,input).pipe(
      catchError(this.handleError('getMainWorkouts', []))
    );
  }

  getSubWorkouts(id: number): Observable<SubWorkout[]>{
    const url = 'http://127.0.0.1:8000/testWorkoutApi/getSubWorkouts';
    let input = new FormData();
    input.append('mainWorkoutId',id.toString());
    return this.http.post<SubWorkout[]>(url,input).pipe(
      catchError(this.handleError('getSubWorkouts', []))
    );
  }

  getExerciseGoals(id: number):Observable<ExerciseGoal[]> {
    const url = `http://127.0.0.1:8000/testWorkoutApi/getSubWorkoutExercises/?subWorkoutId=${id}`;
    //let input = new FormData();
    //input.append('subWorkoutId',id.toString());
    return this.http.get<ExerciseGoal[]>(url).pipe(
      catchError(this.handleError('getSubWorkoutExercises', []))
    );
  }

  createMainWorkout(mainWorkout: MainWorkout): Observable<MainWorkout> {
    const url = 'http://127.0.0.1:8000/testWorkoutApi/createMainWorkout';
    mainWorkout.profileId = this.profileService.profileId;
    return this.http.post<MainWorkout>(url,mainWorkout,postOptions);
  }

  createSubWorkout(subWorkout: SubWorkout): Observable<SubWorkout> {
    const url = 'http://127.0.0.1:8000/testWorkoutApi/createSubWorkout';
    subWorkout.profileId = this.profileService.profileId;
    return this.http.post<SubWorkout>(url,subWorkout,postOptions);
  }

  updateMainWorkoutName(mainWorkout:MainWorkout): Observable<MainWorkout> {
    const url = 'http://127.0.0.1:8000/testWorkoutApi/updateMainWorkoutName';
    return this.http.post<MainWorkout>(url,mainWorkout,postOptions);
  }

  updateSubWorkoutName(subWorkout:SubWorkout): Observable<SubWorkout> {
    const url ='http://127.0.0.1:8000/testWorkoutApi/updateSubWorkoutName';
    return this.http.post<SubWorkout>(url,subWorkout,postOptions);
  }

  deleteMainWorkout(mainWorkout:MainWorkout) {
    const url = 'http://127.0.0.1:8000/testWorkoutApi/deleteMainWorkout';
    mainWorkout.profileId = this.profileService.profileId;
    return this.http.post<MainWorkout>(url,mainWorkout,postOptions);
  }

  deleteSubWorkout(subWorkout:SubWorkout) {
    const url = 'http://127.0.0.1:8000/testWorkoutApi/deleteSubWorkout';
    return this.http.post<SubWorkout>(url,subWorkout,postOptions);
  }

  updateExerciseGoals(subWorkout:SubWorkout): Observable<SubWorkout> {
    const url = 'http://127.0.0.1:8000/testWorkoutApi/updateSubWorkoutExerciseGoals';
    return this.http.post<SubWorkout>(url,subWorkout,postOptions);
  }

  addExerciseGoals(subWorkout:SubWorkout): Observable<SubWorkout> {
    const url = 'http://127.0.0.1:8000/testWorkoutApi/addExerciseGoals';
    return this.http.post<SubWorkout>(url,subWorkout,postOptions);
  }

  deleteExerciseGoals(subWorkout:SubWorkout,ex_goal:ExerciseGoal): Observable<SubWorkout> {
    const url = 'http://127.0.0.1:8000/testWorkoutApi/deleteExerciseGoals';
    let input = new FormData();
    input.append('subWorkoutId',subWorkout.id.toString());
    input.append('exercise_goal_id',ex_goal.id.toString());
    return this.http.post<SubWorkout>(url,input);
  }

  getCompletedWorkouts() {
    const url = 'http://127.0.0.1:8000/testWorkoutApi/getCompletedWorkouts';
    let input = new FormData();
    input.append('profileId',this.profileService.profileId.toString());
    return this.http.post<Workout>(url,input);
  }

}
