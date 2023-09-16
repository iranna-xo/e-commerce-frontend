import { Component } from '@angular/core';
import { AuthenticationSerivces } from '../../service/authentication-serivces.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  constructor(private auth:AuthenticationSerivces,private router:Router) {
   }

   changePassword(){
    this.router.navigate(['/authentication','change-password'])
   }

   openCart(){
    this.router.navigate(['/app','cart']);
   }

  signOut(){
    this.auth.signOut();
    this.router.navigate(['/authentication']);
  }
}
