import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ExercisesComponent } from './exercise-components/exercises/exercises.component';
import { AppRoutingModule } from './/app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
import {ExerciseService} from "./exercise-services/exercise.service";
import { ExerciseDetailComponent } from './exercise-components/exercise-detail/exercise-detail.component';
import { CreateExerciseComponent } from './exercise-components/create-exercise/create-exercise.component';
import { UpdateExerciseComponent } from './exercise-components/update-exercise/update-exercise.component';
import { MainWorkoutComponent } from './workout-components/main-workout/main-workout.component';
import { SubWorkoutComponent } from './workout-components/sub-workout/sub-workout.component';
import { UserSignupComponent } from './user-profile-components/user-signup/user-signup.component';
import { UserLoginComponent } from './user-profile-components/user-login/user-login.component';
import { UserProfileComponent } from './user-profile-components/user-profile/user-profile.component';
import {ProfileService} from "./user-profile-service/profile.service";
import {WorkoutService} from "./workout-service/workout.service";
import { UserLogoutComponent } from './user-profile-components/user-logout/user-logout.component';
import { ProgressPhotosComponent } from './progress-photo-components/progress-photos/progress-photos.component';
import {ProgressPhotoService} from "./progress-photo-service/progress-photo.service";
import { AddProgressPhotoComponent } from './progress-photo-components/add-progress-photo/add-progress-photo.component';
import { CompletedWorkoutsComponent } from './workout-components/completed-workouts/completed-workouts.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import {NgxOAuthModule} from 'ngx-oauth-client';
import {HttpTokenClient} from "./http-token-client";

@NgModule({
  declarations: [
    AppComponent,
    ExercisesComponent,
    ExerciseDetailComponent,
    CreateExerciseComponent,
    UpdateExerciseComponent,
    MainWorkoutComponent,
    SubWorkoutComponent,
    UserSignupComponent,
    UserLoginComponent,
    UserProfileComponent,
    UserLogoutComponent,
    ProgressPhotosComponent,
    AddProgressPhotoComponent,
    CompletedWorkoutsComponent,
    WelcomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFToken'
    }),
    NgxOAuthModule,
  ],
  providers: [ExerciseService,ProfileService,WorkoutService,ProgressPhotoService,HttpTokenClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
