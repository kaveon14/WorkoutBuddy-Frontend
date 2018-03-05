import {Component, OnInit, ViewChild} from '@angular/core';
import {ProgressPhoto} from "../../models/progress-photo";
import {ProgressPhotoService} from "../../progress-photo-service/progress-photo.service";
import {ProfileService} from "../../user-profile-service/profile.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-progress-photos',
  templateUrl: './progress-photos.component.html',
  styleUrls: ['./progress-photos.component.css']
})
export class ProgressPhotosComponent implements OnInit {

  progress_photos: ProgressPhoto[];
  hide_photos: boolean;
  clickedPhoto: ProgressPhoto;

  constructor(private progressPhotoService: ProgressPhotoService) {
    this.hide_photos = false;
    this.clickedPhoto = null;
  }

  ngOnInit() {
    this.getProgressPhotos();
  }

  getProgressPhotos() {
    this.progressPhotoService.getProgressPhotos().subscribe(res => {
      this.progress_photos = res['RequestResponse'];
    });
  }

  showPhoto(photo: ProgressPhoto) {
    this.hide_photos = true;
    this.clickedPhoto = photo;
  }

  showPhotoList() {
    this.hide_photos = false;
  }

  deletePhoto(photo:ProgressPhoto) {
    let index = this.progress_photos.indexOf(photo);
    if (index > -1) {
      this.progress_photos.splice(index, 1);
    }
    this.progressPhotoService.deleteProgressPhoto(photo).subscribe();
    this.showPhotoList();
  }

}
