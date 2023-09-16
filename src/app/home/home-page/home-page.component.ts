import { AuthenticationSerivces } from 'src/assets/shared/service/authentication-serivces.service';
import { Component } from '@angular/core';
import { User } from 'src/assets/shared/models/authentication.model';
import { ProductService } from 'src/assets/shared/service/product.service';
import { Product } from 'src/assets/shared/models/product.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  user!:User;
  products: Product[];
  constructor(private auth:AuthenticationSerivces, private ps:ProductService){
    this.products =[];
    this.auth.isLoggedIn().subscribe((data)=>{
      if(data){
        this.user = this.auth.getUser();
      }
    })
  }
  ngOnInit(){
    this.ps.getProducts().subscribe((data)=>{
      console.log(data);
      this.products = data
    });

  }

}
