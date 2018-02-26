import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {Body} from "@angular/http/src/body";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProfileService {

  profileId: number;

  constructor(private http: HttpClient) {
    this.profileId = 1
  }

  login(username: string,password: string) {
    const url = 'http://127.0.0.1:8000/login';
    let input = new FormData();
    input.append("username",username);
    input.append("password",password);
    return this.http.post(url,input);
  }

}
