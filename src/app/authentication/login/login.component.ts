import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserCrendentails, UserSession } from 'src/assets/shared/models/authentication.model';
import { AuthenticationSerivces } from 'src/assets/shared/service/authentication-serivces.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private authenticationSerivces: AuthenticationSerivces,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    let userCred: UserCrendentails = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };
    this.authenticationSerivces.login(userCred).subscribe((data:UserSession)=>{
      this.authenticationSerivces.setUser(data);
      this.router.navigate(['/authentication','otp']);
    },
    (err:HttpErrorResponse)=>{
      if(err.status === 401){

        alert(err.error.errorMessage);
        this.loginForm.reset();
      }
      else{
        alert("Something went wrong, retry in some time");
        this.loginForm.reset();
      }
    });
  }
}
