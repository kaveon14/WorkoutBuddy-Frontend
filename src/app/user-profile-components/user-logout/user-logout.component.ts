import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../../user-profile-service/profile.service";

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

  logged_out: boolean;

  constructor(private profileService: ProfileService) {
    this.logged_out = false;
  }

  ngOnInit() {
    console.log(this.profileService.profileId);
    //if(this.profileService.profileId == 0) {
      //this.logged_out = true;
    //}
  }

  logout() {
    this.profileService.profileId = 0;
    this.logged_out = true;
  }



}
