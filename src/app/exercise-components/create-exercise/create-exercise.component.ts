import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ExerciseService} from "../exercise-services/exercise.service";
import {Exercise} from "../models/exercise";

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.css']
})
export class CreateExerciseComponent implements OnInit {

  formG: FormGroup;


  submitted = false;


  constructor(private fb: FormBuilder, private exerciseService: ExerciseService) {
    this.createForm();
  }
  // <textarea formControlName="exercise_description" rows="4" cols="50"></textarea>

  @ViewChild("fileInput") fileInput;
//needs to used for updating an exercise
  addFile(exercise: Exercise): void {// this SHIT works
    let fi = this.fileInput.nativeElement;
    if (fi.files && fi.files[0]) {
      let fileToUpload = fi.files[0];
      console.log(fileToUpload)
      this.exerciseService
        .setCustomExerciseImage(fileToUpload,exercise.id,exercise.exercise_name)
        .subscribe(res => {
          console.log(res);
        });
    }
  }


      createForm() {
    this.formG = this.fb.group({
      exercise_name: '',
      exercise_description: '',
    });
  }

  onSubmit() {
    this.submitted = true;
    this.addExercise();
  }

  addExercise() {//this needs to do checking
    const model = this.formG.value;
    var exercise = new Exercise();
    exercise.exercise_name = model.exercise_name as string;
    exercise.exercise_description = model.exercise_description as string;
    this.exerciseService.createExercise(exercise).subscribe();
    this.addFile(exercise);
  }

  ngOnInit() {
  }

}
