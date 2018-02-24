import { Component, OnInit } from '@angular/core';
import {ExerciseService} from "../exercise-services/exercise.service";
import {Exercise} from "../models/exercise";

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  defaultExercises: Exercise[];

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.getDefaultExercises();
  }

  //needs to check if logged in, if logged in get all exercises
  getDefaultExercises(): void {
    this.exerciseService.getDefaultExercises()
       .subscribe(defaultExercises => this.defaultExercises = defaultExercises['RequestResponse']);
  }

}
