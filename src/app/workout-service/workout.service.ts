import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {MainWorkout} from "../models/main-workout";
import {catchError} from "rxjs/operators";
import {ProfileService} from "../user-profile-service/profile.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {of} from "rxjs/observable/of";
import {SubWorkout} from "../models/sub-workout";
import {ExerciseGoals} from "../models/exercise-goals";

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

  getExerciseGoals(id: number):Observable<ExerciseGoals[]> {
    const url = `http://127.0.0.1:8000/testWorkoutApi/getSubWorkoutExercises/?subWorkoutId=${id}`;
    //let input = new FormData();
    //input.append('subWorkoutId',id.toString());
    return this.http.get<ExerciseGoals[]>(url).pipe(
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

}
