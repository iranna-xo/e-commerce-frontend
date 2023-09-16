import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserSession } from 'src/assets/shared/models/authentication.model';
import { AuthenticationSerivces } from 'src/assets/shared/service/authentication-serivces.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  passwordForm : FormGroup ;
  constructor(private auth : AuthenticationSerivces, private router:Router){
    this.passwordForm = new FormGroup({
      oldPassword: new FormControl('', [Validators.required,Validators.pattern('.{8,}')]),
      newPassword: new FormControl('', [Validators.required,Validators.pattern('.{8,}')]),
      confirmPassword: new FormControl('', [Validators.required,Validators.pattern('.{8,}')]),
    })
  }

  changePassword(){
    this.auth.changePassword(this.passwordForm.get('oldPassword')?.value,this.passwordForm.get('newPassword')?.value)
    .subscribe((userSession:UserSession)=>{
      alert('Password has been changed successfully');
      this.router.navigate(['/app','products'])
    },
    (err:HttpErrorResponse)=>{
      alert(err.error.errorMessage);
      this.passwordForm.reset();
    })

  }

}
