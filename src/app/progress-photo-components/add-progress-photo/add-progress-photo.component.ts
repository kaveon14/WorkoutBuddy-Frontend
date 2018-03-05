import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProgressPhotoService} from "../../progress-photo-service/progress-photo.service";

@Component({
  selector: 'app-add-progress-photo',
  templateUrl: './add-progress-photo.component.html',
  styleUrls: ['./add-progress-photo.component.css']
})
export class AddProgressPhotoComponent implements OnInit {

  formG: FormGroup;
  @ViewChild("file") file;

  constructor(private fb: FormBuilder,private progressPhotoService: ProgressPhotoService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formG = this.fb.group({});
  }

  addPhoto() {
    let fileToUpload = this.getImageFile();
    this.progressPhotoService.addProgressPhoto(fileToUpload).subscribe();
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
