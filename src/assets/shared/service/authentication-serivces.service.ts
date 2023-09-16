import { Injectable } from '@angular/core';
import { ChangePassword, User, UserCrendentails, UserSession } from '../models/authentication.model';
import { BehaviorSubject, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationSerivces {


  baseUrl : string;
  private sessionKey : string | null = null ;
  user!: User ;
  userAuth = new BehaviorSubject(false);

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = "http://localhost:5000"
  }

  //write method to post url

  signUp(user: User):Observable<UserSession>{
    return this.http.post<UserSession>(this.baseUrl + "/sign-up",user);
  }

  getSessionKey():string | null{
    if(this.sessionKey){
      return this.sessionKey;
    }
    return null;
  }

  setSessionKey(key:string):void{
    this.sessionKey = key;
    if(this.sessionKey != ""){
      this.userAuth.next(true);
    }
  }

  setUser(user: UserSession){
    this.user = user;
    this.setSessionKey(user.sessionKey);
  }
  getUser(){
    return this.user;
  }

  isLoggedIn() {
    return this.userAuth;
  }


  signOut() {
    this.userAuth.next(false);
    this.user.email = "";
    this.user.name = "";
    this.sessionKey = null;
  }

  login(userCred:UserCrendentails): Observable<UserSession>{
    return this.http.post<UserSession>(this.baseUrl + "/login",userCred);
  }


  verifyOpt(otp:string):Observable<string>{
    let body = {otp: otp, email: this.user.email}
    return this.http.post<string>(this.baseUrl + "/verify-otp",body);
  }

  changePassword(oldPassword:string, newPassword:string): Observable<any>{
    let changePassword: ChangePassword={
      email: this.user.email,
      oldPassword:oldPassword,
      newPassword:newPassword,
    }
    return this.http.post(this.baseUrl + "/change-password",changePassword)
   }



}
