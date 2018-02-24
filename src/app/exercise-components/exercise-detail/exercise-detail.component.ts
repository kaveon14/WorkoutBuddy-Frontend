import {Component, OnInit} from '@angular/core';
import {Exercise} from "../../models/exercise";
import {ActivatedRoute} from "@angular/router";
import {ExerciseService} from "../../exercise-services/exercise.service";

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.css']
})
export class ExerciseDetailComponent implements OnInit {

  exercise: Exercise;

  constructor(private route: ActivatedRoute,private exerciseService: ExerciseService) {
    this.exercise = new Exercise();
  }

  ngOnInit() {
    this.getExercise();
  }

  getExercise(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const default_exercise = this.route.snapshot.paramMap.get('default_exercise');
    this.exerciseService.getExercise(id,default_exercise=='true')
      .subscribe(ex => this.exercise = ex['RequestResponse']);
  }

}
