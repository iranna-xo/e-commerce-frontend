import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { OtpVerifcationComponent } from 'src/assets/shared/components/otp-verifcation/otp-verifcation.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"sign-up",
    pathMatch:'full'
  },
  {
    path:"sign-up",
    component:SignUpComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'otp',
    component:OtpVerifcationComponent
  },
  {
    path:'change-password',
    component:ChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
