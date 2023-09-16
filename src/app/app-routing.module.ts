import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthGuardGuard } from 'src/assets/shared/guard/user-auth-guard.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/authentication',
    pathMatch:'full'},
  {
    path:'authentication',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path:'app',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    // canActivate:[UserAuthGuardGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
