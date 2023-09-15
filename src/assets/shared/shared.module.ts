import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtpVerifcationComponent } from './otp-verifcation/otp-verifcation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OtpVerifcationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
