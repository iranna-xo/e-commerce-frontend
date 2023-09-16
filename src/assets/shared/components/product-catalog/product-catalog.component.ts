import { Product } from '../../models/product.model';
import { ProductService } from './../../service/product.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent {

  @Input() products!: Product[];
  @Input() fromCart:boolean;


  constructor(){
    this.fromCart =false;
  }

}
