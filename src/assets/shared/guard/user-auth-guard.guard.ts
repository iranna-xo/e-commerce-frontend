import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationSerivces } from '../../shared/service/authentication-serivces.service';
import {  inject } from '@angular/core';

export const UserAuthGuardGuard: CanActivateFn = async (route, state) => {
  let auth = inject(AuthenticationSerivces);
  let router = inject(Router)
  // console.log(auth.get)
  let flag = await auth.isLoggedIn().getValue();
  if(flag){
    return true;
  }
  else{
    alert("Please login to continue");
    router.navigate(['/authentication']);
    return false;
  }
};
