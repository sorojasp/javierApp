import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public enableSubmitButton = false;
  public gender='female';



  studentForm = this.fb.group({
    name: [null, Validators.compose([
      Validators.required
    ])],
    lastName:[null, Validators.compose([
      Validators.required
    ])],
    studentCode: [null, Validators.compose([
      Validators.required
    ])],
    course: [null, Validators.compose([
      Validators.required
    ])],
    home: [null, Validators.compose([
      Validators.required
    ])],
   //female: [null, Validators.compose([
    
  //])],
   //male: [null, Validators.compose([])],
    email: [null, Validators.compose([
      Validators.required
    ])],
    password: [null, Validators.compose([
      Validators.required
    ])],
    confirmPassword: [null, Validators.compose([
      Validators.required
    ])]
  });





  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { 

    
  }

  ngOnInit(): void { }

  public goAnotherView() {
    this.router.navigate(['../students/challenges'])

  }

  public verifyPassword(ev:any){

    if(this.studentForm.value.password===ev &&
      this.studentForm.valid){
      console.log('equals')
      this.enableSubmitButton=true;
    }else{
      this.enableSubmitButton=false;
    }

  }

  public selectGender(ev:string){

    this.gender=ev;

    this.studentForm.value['gender']=this.gender

    console.log(this.studentForm.value)

  }

}
