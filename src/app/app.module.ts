import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule, NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/assets/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgbPopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
