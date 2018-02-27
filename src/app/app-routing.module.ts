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

const routes = [
  {path: 'exercises',component: ExercisesComponent},
  {path: 'exercise/:id/:default_exercise',component: ExerciseDetailComponent},
  {path: 'createExercise',component: CreateExerciseComponent},
  {path: 'updateExercise/:id', component: UpdateExerciseComponent},
  {path:'login', component: UserLoginComponent},
  {path:'mainworkouts', component: MainWorkoutComponent},
  {path:'subworkouts/:id', component: SubWorkoutComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
