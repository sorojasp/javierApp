import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { RegisterComponent } from './register/register.component';
import { NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ChallengesComponent } from './challenges/challenges.component';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent, ChallengesComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    NgbAlertModule,
    ReactiveFormsModule,
    
  ],
})
export class StudentsModule { }
