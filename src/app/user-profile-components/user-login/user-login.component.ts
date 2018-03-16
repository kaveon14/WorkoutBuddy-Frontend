import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProfileService} from "../../user-profile-service/profile.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  formG: FormGroup;

  constructor(private fb: FormBuilder,private profileService: ProfileService) {
    this.createForm()
  }

  ngOnInit() {
  }

  createForm() {
    this.formG = this.fb.group( {
      username: '',
      password: '',
    })
  }

  login() {
    const model = this.formG.value;
    let username = model.username;
    let password = model.password;
    this.profileService.login(username,password).subscribe(r => {
      this.profileService.profileId = r['RequestResponse']['profileId'];
      console.log(this.profileService.profileId);
    })
  }

}
