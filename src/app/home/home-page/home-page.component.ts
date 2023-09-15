import { AuthenticationSerivces } from 'src/assets/shared/service/authentication-serivces.service';
import { Component } from '@angular/core';
import { User } from 'src/assets/shared/models/authentication.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  user!:User;
  constructor(private auth:AuthenticationSerivces){
    this.auth.isLoggedIn().subscribe((data)=>{
      if(data){
        this.user = this.auth.getUser();
      }
    })
  }
  ngOnInit(){

  }

}
