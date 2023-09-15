import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationSerivces } from 'src/assets/shared/service/authentication-serivces.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce-frontend';
  isLoggedIn: boolean;
  constructor(private auth:AuthenticationSerivces, private router: Router){
    this.isLoggedIn=false;
    this.auth.isLoggedIn().subscribe((flag)=>{
      this.isLoggedIn = flag;
    })
  }

  signOut(){
    this.auth.signOut();
    this.router.navigate(['/authentication']);
  }
}
