import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Exercise} from "../models/exercise";
import {HttpTokenClient} from "../http-token-client";

@Injectable()
export class ExerciseService {

  constructor(private http: HttpClient,private tokenClient:HttpTokenClient) { }

  getAllExercises(): Observable<Exercise[]> {
    const url = 'http://127.0.0.1:8000/testExerciseApi/getAllExercises';
    let exercise_list_object: Exercise[] = [];
    return this.tokenClient.getObservableType(url,exercise_list_object);
  }

  getExercise(id: number,default_exercise: boolean): Observable<Exercise> {
    let url = '';
    if (!default_exercise) {
      url = `http://127.0.0.1:8000/testExerciseApi/getCustomExercise/?id=${id}`;
      return this.tokenClient.getObservableType(url,new Exercise());
    } else {
      url = `http://127.0.0.1:8000/testExerciseApi/getDefaultExercise/?id=${id}`;
      return this.http.get<Exercise>(url);
    }
  }

  createExercise(exercise: Exercise,file: any) {
    const url = 'http://localhost:8000/testExerciseApi/createCustomExercise';
    let input = new FormData();
    input.append('exercise_name',exercise.exercise_name);
    input.append('exercise_description',exercise.exercise_description);
    input.append('file',file);
    return this.tokenClient.post(url,input);
  }

  updateCustomExercise(exercise: Exercise,file: any) {
    const url = "http://127.0.0.1:8000/testExerciseApi/updateCustomExercise";
    let input = new FormData();
    input.append('id',exercise.id.toString());
    input.append('exercise_name',exercise.exercise_name);
    input.append('exercise_description',exercise.exercise_description);
    input.append('file',file);
    return this.tokenClient.post(url,input);
  }

  deleteCustomExercise(exercise: Exercise) {
    const url = "http://127.0.0.1:8000/testExerciseApi/deleteCustomExercise";
    let input = new FormData();
    input.append("id",exercise.id.toString());
    return this.tokenClient.post(url,input);
  }
}
