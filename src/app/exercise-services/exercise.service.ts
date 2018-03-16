import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Exercise} from "../models/exercise";
import {ProfileService} from "../user-profile-service/profile.service";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const t = {
  headers: new HttpHeaders( {
    'X-CSRFToken':'csrftoken'
  })
};

const postOptions = {
  headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'},)
};


@Injectable()
export class ExerciseService {
// will have a lot more urls than the demo application
  constructor(private http: HttpClient,private profileService: ProfileService) { }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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

  getAllExercises(): Observable<Exercise[]> {// no way this gonna work
    const url = 'http://127.0.0.1:8000/testExerciseApi/getAllExercises';
    let input = new FormData();
    input.append('profileId',this.profileService.profileId.toString());
    return this.http.post<Exercise[]>(url,input,t).pipe(
      catchError(this.handleError('getAllExercises', []))
    );
  }
  getExercise(id: number,default_exercise: boolean): Observable<Exercise> {
    let url = '';
    if (!default_exercise) {
      url = `http://127.0.0.1:8000/testExerciseApi/getCustomExercise/?id=${id}`;
      return this.http.get<Exercise>(url).pipe(
        catchError(this.handleError<Exercise>(`getCustomExercise id=${id}`))// put these thing where they suppose to be
      );
    } else {
      url = `http://127.0.0.1:8000/testExerciseApi/getDefaultExercise/?id=${id}`;
      return this.http.get<Exercise>(url).pipe(
        catchError(this.handleError<Exercise>(`getDefaultExercise id=${id}`))// put these thing where they suppose to be
      );
    }
  }

  createExercise(exercise: Exercise): Observable<Exercise> {
    const url = 'http://127.0.0.1:8000/testExerciseApi/createCustomExercise';
    exercise.profileId = this.profileService.profileId;
    return this.http.post<Exercise>(url, exercise,postOptions);
  }

  setCustomExerciseImage(file: any,id: number) {//only used when creating an exercise
    let input = new FormData();
    input.append("id",id.toString());
    input.append("file", file);
    const url = 'http://127.0.0.1:8000/testExerciseApi/setCustomExerciseImage';
    return this.http.post(url,input);
  }

  updateCustomExercise(exercise: Exercise): Observable<Exercise> {
    const url = "http://127.0.0.1:8000/testExerciseApi/updateCustomExercise";
    return this.http.post<Exercise>(url, exercise,postOptions);
  }

  updateCustomExerciseImage(file: any, id: number) {
    let input = new FormData();
    input.append("id",id.toString());
    input.append("file", file);
    const url = 'http://127.0.0.1:8000/testExerciseApi/u';
    return this.http.post(url,input);
  }

  deleteCustomExercise(exercise: Exercise) {
    const url = "http://127.0.0.1:8000/testExerciseApi/deleteCustomExercise";
    return this.http.post<Exercise>(url, exercise,postOptions);
  }

}
