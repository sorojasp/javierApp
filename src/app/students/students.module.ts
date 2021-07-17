import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { RegisterComponent } from './register/register.component';
import {NgbDropdownModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ChallengesComponent } from './challenges/challenges.component';



@NgModule({
  declarations: [RegisterComponent, ChallengesComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    NgbAlertModule,
    NgbDropdownModule

  ],
})
export class StudentsModule { }
