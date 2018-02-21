import { Component, OnInit } from '@angular/core';
import {Exercise} from "../models/exercise";
import {ActivatedRoute} from "@angular/router";
import {ExerciseService} from "../exercise-services/exercise.service";
//allow for editing of custom exercises
@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.css']
})
export class ExerciseDetailComponent implements OnInit {


  exercise: Exercise;

  constructor(private route: ActivatedRoute,private exerciseService: ExerciseService) { }

  getExercise(): void {
    const id = +this.route.snapshot.paramMap.get('id');// need to make a file for the constants
    this.exerciseService.getExercise(id,false).subscribe(ex => this.exercise = ex['RequestResponse']);
  }

  ngOnInit() {
    this.getExercise();
  }

}
