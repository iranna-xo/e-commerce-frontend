import { Product } from 'src/assets/shared/models/product.model';
import { ProductService } from './../../../assets/shared/service/product.service';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {


  loading: boolean;

  totalAmount: number;

  cartProducts: Product[];
  constructor(private ps: ProductService, private cdr:ChangeDetectorRef){
    this.loading = true;
    this.cartProducts = [];
    this.totalAmount = 0
  }
  ngOnInit(): void{
    this.getCartProducts();
    this.loading= false;
  }

  getCartProducts(){
    this.cartProducts = this.ps.getCartProducts();
    this.calculateTotalPrice();
    this.cdr.detectChanges();
  }

  calculateTotalPrice():void{
    let sum = 0;
    for(let product of this.cartProducts){
      sum += product.amount;
    }
    this.totalAmount = sum;
  }

  pay():void{
    this.ps.pay()
    alert("Payment Successful");
    this.getCartProducts();
  }
}
