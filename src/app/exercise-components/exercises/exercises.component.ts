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

  getDefaultExercises(): void {
    this.exerciseService.getDefaultExercises()
       .subscribe(defaultExercises => this.defaultExercises = defaultExercises['RequestResponse']);
  }

  ngOnInit() {
    this.getDefaultExercises();
  }

}
