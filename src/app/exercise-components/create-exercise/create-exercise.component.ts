import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ExerciseService} from "../../exercise-services/exercise.service";
import {Exercise} from "../../models/exercise";

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.css']
})
export class CreateExerciseComponent implements OnInit {

  formG: FormGroup;
  @ViewChild("file") file;


  constructor(private fb: FormBuilder, private exerciseService: ExerciseService) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.formG = this.fb.group({
      exercise_name: '',
      exercise_description: '',
    });
  }

  onSubmit() {//this is calling it twice
    this.addExercise();
  }

  addExercise() {
    const model = this.formG.value;
    let exercise = new Exercise();
    exercise.exercise_name = model.exercise_name as string;
    exercise.exercise_description = model.exercise_description as string;
    this.exerciseService.createExercise(exercise).subscribe(res =>  {
       this.addFile(res['id']);
    });
  }

  addFile(id: number): void {
    let fileToUpload = this.getImageFile();
    this.exerciseService.setCustomExerciseImage(fileToUpload,id)
      .subscribe(res => {
        console.log(res);
      });
  }

  updateImgSrc() {
    let file = this.getImageFile();
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file as File);
    let preview = document.querySelector('img');

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
