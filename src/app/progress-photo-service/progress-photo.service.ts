import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ProfileService} from "../user-profile-service/profile.service";
import {Observable} from "rxjs/Observable";
import {ProgressPhoto} from "../models/progress-photo";

const t = {
  headers: new HttpHeaders( {
    'X-CSRFToken':'csrftoken'
  })
};

const postOptions = {
  headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'},)
};

@Injectable()
export class ProgressPhotoService {

  constructor(private http: HttpClient,private profileService: ProfileService) { }

  getProgressPhotos(): Observable<ProgressPhoto[]> {
    const url = 'http://127.0.0.1:8000/testProgressPhotoApi/getProgressPhotos';
    let input = new FormData();
    input.append('profileId','1');
    return this.http.post<ProgressPhoto[]>(url,input,t);
  }

  addProgressPhoto(file:any) {
    const url = 'http://127.0.0.1:8000/testProgressPhotoApi/addProgressPhotos';
    let input = new FormData();
    input.append("file", file);
    input.append("profileId",this.profileService.profileId.toString());
    return this.http.post(url,input);
  }

  deleteProgressPhoto(photo:ProgressPhoto) {
    const url = 'http://127.0.0.1:8000/testProgressPhotoApi/deleteProgressPhoto';
    photo.profileId = this.profileService.profileId;
    return this.http.post<ProgressPhoto[]>(url,photo,postOptions);
  }

}
