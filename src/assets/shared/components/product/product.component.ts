import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: Product;
  @Input() fromCart:boolean;

  constructor(private productservice:ProductService) {
    this.fromCart=false;
  }

  addToCart(){
    this.productservice.addToCart(this.product);
  }


  removeFromCart(){
    this.productservice.removeFromCart(this.product.productId);
  }
}
