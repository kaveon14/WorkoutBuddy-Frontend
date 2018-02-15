import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ExercisesComponent} from "./exercises/exercises.component";
import {ExerciseDetailComponent} from "./exercise-detail/exercise-detail.component";

const routes = [
  {path: 'exercises',component: ExercisesComponent},
  {path: 'exercise/:id',component: ExerciseDetailComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
