import { Component, OnInit } from '@angular/core';
import {ExerciseService} from "../../exercise-services/exercise.service";
import {Exercise} from "../../models/exercise";

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  defaultExercises: Exercise[];

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.getExercises();
  }

  getExercises(): void {
    this.exerciseService.getAllExercises()
       .subscribe(defaultExercises => this.defaultExercises = defaultExercises['RequestResponse']);
  }

}
