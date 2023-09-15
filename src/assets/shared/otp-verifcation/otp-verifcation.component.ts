import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationSerivces } from 'src/assets/shared/service/authentication-serivces.service';

@Component({
  selector: 'app-otp-verifcation',
  templateUrl: './otp-verifcation.component.html',
  styleUrls: ['./otp-verifcation.component.scss']
})
export class OtpVerifcationComponent {

  otp: FormGroup;


  constructor(private auth: AuthenticationSerivces, private router: Router){
    this.otp = new FormGroup({
      otpControl:new FormControl("", [Validators.required, Validators.pattern('.{6,}')])
    })
  }

  ngOnInit(): void {
  }

  verifyOtp(){
    let otp = this.otp.get('otpControl')?.value;
    this.auth.verifyOpt(otp).subscribe((sessionKey:string)=>{
      this.auth.setSessionKey(sessionKey);
      this.router.navigate(['/app']);
    },
    (err:HttpErrorResponse)=>{
      alert(err.error.errorMessage);
    });
  }
  resendOpt(){

  }

}
