import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public grades=[1,2,3,4,5,6,7,8,9,10,11]
  public courses=[1,2,4,5,6,7,8]

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public goAnotherView(){
    this.router.navigate(['../students/challenges'])

  }

}
