import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainContentComponent } from './content/main-content/main-content.component';
import {  ThongtincanhanComponent} from './content/thongtincanhan/thongtincanhan.component';
import { InforManagerComponent } from './infor-manager/infor-manager.component';




const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: '',
    redirectTo: 'main',
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
  {
    path: 'manager',
    component: InforManagerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
