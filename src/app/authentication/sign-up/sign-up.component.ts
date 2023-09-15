import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User, UserSession } from '../../../assets/shared/models/authentication.model';
import { AuthenticationSerivces } from 'src/assets/shared/service/authentication-serivces.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  signUpForm : FormGroup;


  constructor(
    private authenticationSerivces: AuthenticationSerivces,
    private router: Router){
    this.signUpForm = new FormGroup(
      {
        name : new FormControl('',[Validators.required]),
        email : new FormControl('',[Validators.required, Validators.email]),
        password : new FormControl('',[Validators.required, Validators.pattern('.{8,}')]),
        rePassword : new FormControl('',[Validators.required,Validators.pattern('.{8,}')]),
      }
    )
  }


  signUp():void {
    if(this.signUpForm.get("password")?.value === this.signUpForm.get("rePassword")?.value){
      console.log(this.signUpForm.value);
      let user : User = {
        name:this.signUpForm.get('name')?.value,
        password:this.signUpForm.get('password')?.value,
        email:this.signUpForm.get('email')?.value
      }

      this.authenticationSerivces.signUp(user).subscribe(
        (data:UserSession)=>{
          this.authenticationSerivces.setUser(data);
        this.router.navigate(['/app']);
      }
      ,(err:HttpErrorResponse)=>{
        alert(
          "Email already exists"
        );
      })
    }
  }

}
