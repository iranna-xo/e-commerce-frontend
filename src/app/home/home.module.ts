import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/assets/shared/shared.module';
import { CartPageComponent } from './cart-page/cart-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    CartPageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class HomeModule { }
