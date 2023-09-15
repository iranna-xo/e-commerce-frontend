import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { OtpVerifcationComponent } from 'src/assets/shared/otp-verifcation/otp-verifcation.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
