import { Component, OnInit } from '@angular/core';
import {Exercise} from "../models/exercise";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ExerciseService} from "../exercise-services/exercise.service";
import {ActivatedRoute} from "@angular/router";
// need to check if any changes were made
@Component({
  selector: 'app-update-exercise',
  templateUrl: './update-exercise.component.html',
  styleUrls: ['./update-exercise.component.css']
})
export class UpdateExerciseComponent implements OnInit {

  exercise: Exercise;
  formG: FormGroup;

  constructor(private fb: FormBuilder,private exerciseService: ExerciseService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.getCustomExercise();
    console.log(this.exercise.exercise_name);
    //this.createForm();
  }

  createForm() {
    this.formG = this.fb.group({
      exercise_name: this.exercise.exercise_name,
      exercise_description: this.exercise.exercise_description,
      exercise_image: this.exercise.exercise_image
    });
  }

  getCustomExercise() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.exerciseService.getExercise(id,true).subscribe(ex => this.exercise = ex['RequestResponse']);
  }

  updateExercise() {
    //do shit
  }



}
