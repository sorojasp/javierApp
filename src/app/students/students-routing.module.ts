import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component'
import {ChallengesComponent} from './challenges/challenges.component';

const routes: Routes = [{
  path:'register',
  component: RegisterComponent,
},{
  path:'challenges',
  component: ChallengesComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
