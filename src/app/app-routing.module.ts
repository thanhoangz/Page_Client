import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainContentComponent } from './content/main-content/main-content.component';
import {  ThongtincanhanComponent} from './content/thongtincanhan/thongtincanhan.component';




const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainContentComponent
  },
  {
    path: 'info',
    component: ThongtincanhanComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
