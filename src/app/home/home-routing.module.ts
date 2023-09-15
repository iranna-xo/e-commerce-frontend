import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';



const routes: Routes = [
  {
    path:"",
    redirectTo:"products",
    pathMatch:"full"
 },
  {
    path:'products',
    component:HomePageComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
