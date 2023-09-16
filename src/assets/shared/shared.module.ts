import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtpVerifcationComponent } from './components/otp-verifcation/otp-verifcation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { ProductComponent } from './components/product/product.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    OtpVerifcationComponent,
    ProductCatalogComponent,
    ProductComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPopoverModule
  ],
  exports:[
    OtpVerifcationComponent,
    ProductCatalogComponent,
    ProductComponent,
    SettingsComponent
  ]
})
export class SharedModule { }
