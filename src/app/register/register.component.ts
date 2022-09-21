import { UserService } from './../_services/user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signUpForm ! : FormGroup;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router,
    private userService :UserService) { }
  
  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      userName : [''],
      userFirstName : [''],
      userLastName : [''],
      userPassword : ['']
    })
  }
  

  signUp(){
    // this.http.post<any>("localhost:9090/registerNewUser",this.signUpForm.value )
    this.userService.signUp(this.signUpForm.value)
    .subscribe(res =>{
      if(res==null){
        alert("User already exist");
      }
      alert("SignUp Successfull");
      this.signUpForm.reset();
      this.router.navigate(['home']);
    },
    err =>{
      alert("Something Went Wrong");
      console.log(this.signUpForm.value);
      console.log(err);
    }
    )
    
  }


}
