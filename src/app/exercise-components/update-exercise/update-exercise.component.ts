import {Component,OnInit, ViewChild} from '@angular/core';
import {Exercise} from "../../models/exercise";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ExerciseService} from "../../exercise-services/exercise.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-exercise',
  templateUrl: './update-exercise.component.html',
  styleUrls: ['./update-exercise.component.css']
})
export class UpdateExerciseComponent implements OnInit {

  exercise: Exercise;
  formG: FormGroup;
  @ViewChild("file") file;

  constructor(private fb: FormBuilder,private exerciseService: ExerciseService,
              private route: ActivatedRoute) {
    this.exercise = new Exercise();
  }

  ngOnInit() {
    this.getCustomExercise();
    this.createForm();
  }

  createForm() {
    this.formG = this.fb.group({
      exercise_nam: this.exercise.exercise_name as string,
      exercise_description: this.exercise.exercise_description as string,
    });
  }

  getCustomExercise() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.exerciseService.getExercise(id,false).subscribe(ex => {
      this.exercise = ex['RequestResponse'];
      this.createForm();
    });
  }

  updateExercise() {
    const model = this.formG.value;
    let exercise = new Exercise();
    exercise.id = this.exercise.id;
    exercise.exercise_name = model.exercise_nam as string;
    exercise.exercise_description = model.exercise_description as string;
    let fileToUpload = this.getImageFile();
    this.exerciseService.updateCustomExercise(exercise,fileToUpload).subscribe(res => {
      console.log(res);
    });
  }

  deleteExercise() {
    this.exerciseService.deleteCustomExercise(this.exercise).subscribe(res => {
      console.log(res);
    });
  }

  updateImgSrc() {
    let file = this.getImageFile();
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file as File);
    var preview = document.querySelector('img');

    fileReader.addEventListener("load",  function() {
      preview.src = fileReader.result;
    });
  }

  getImageFile(): File {
    let fi = this.file.nativeElement;
    if (fi.files && fi.files[0]) {
      return fi.files[0];
    }
    return null;
  }

}
