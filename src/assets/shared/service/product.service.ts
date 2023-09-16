import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl : string;
  cart: Product[] = [];
  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:5000";
   }

  getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>( this.baseUrl + "/products");
  }


  addToCart(product: Product){
    let flag : boolean = false;
    for(let cartProudct of this.cart){
      if(cartProudct.productId ===product.productId){
        flag = true;
        break;
      }
    }
    if(!flag){
      this.cart.push(product);
      alert("Product added to cart");
    }else{
      alert("Product already in cart");
    }
  }

  removeFromCart(productId:number){
    let index = -1;
    for(let product of this.cart){
      if(product.productId === productId){
        index = this.cart.indexOf(product);
        break;
      }
    }
    this.cart.splice(index,1);


  }

  getCartProducts():Product[]{
    return this.cart;
  }

  pay() {
    this.cart= [];
    console.log(this.cart)

  }
}
