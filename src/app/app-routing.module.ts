import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ExercisesComponent} from "./exercise-components/exercises/exercises.component";
import {ExerciseDetailComponent} from "./exercise-components/exercise-detail/exercise-detail.component";
import {CreateExerciseComponent} from "./exercise-components/create-exercise/create-exercise.component";
import {UpdateExerciseComponent} from "./exercise-components/update-exercise/update-exercise.component";
import {UserLoginComponent} from "./user-profile-components/user-login/user-login.component";
import {MainWorkoutComponent} from "./workout-components/main-workout/main-workout.component";
import {SubWorkoutComponent} from "./workout-components/sub-workout/sub-workout.component";
import {UserLogoutComponent} from "./user-profile-components/user-logout/user-logout.component";
import {ProgressPhotosComponent} from "./progress-photo-components/progress-photos/progress-photos.component";
import {AddProgressPhotoComponent} from "./progress-photo-components/add-progress-photo/add-progress-photo.component";
import {CompletedWorkoutsComponent} from "./workout-components/completed-workouts/completed-workouts.component";

const routes = [
  {path: 'exercises',component: ExercisesComponent},
  {path: 'exercise/:id/:default_exercise',component: ExerciseDetailComponent},
  {path: 'createExercise',component: CreateExerciseComponent},
  {path: 'updateExercise/:id', component: UpdateExerciseComponent},
  {path:'login', component: UserLoginComponent},
  {path:'logout', component: UserLogoutComponent},
  {path:'mainworkouts', component: MainWorkoutComponent},
  {path:'subworkouts/:id', component: SubWorkoutComponent},
  {path: 'progressPhotos', component: ProgressPhotosComponent},
  {path: 'addProgressPhoto', component:AddProgressPhotoComponent},
  {path: 'getCompletedWorkouts',component:CompletedWorkoutsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
