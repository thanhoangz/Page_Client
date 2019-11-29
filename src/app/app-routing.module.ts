import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainContentComponent } from './content/main-content/main-content.component';
import {  ThongtincanhanComponent} from './content/thongtincanhan/thongtincanhan.component';
import {  ThongTinDiemComponent} from './content/thong-tin-diem/thong-tin-diem.component';
import {  ThongTinQthtComponent} from './content/thong-tin-qtht/thong-tin-qtht.component';
import {  LichSuDongTienComponent} from './content/lich-su-dong-tien/lich-su-dong-tien.component';




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
  {
    path: 'diem',
    component: ThongTinDiemComponent
  },
  {
    path: 'qua-trinh-hoc-tap',
    component: ThongTinQthtComponent
  },
  {
    path: 'lich-su-dong-tien',
    component: LichSuDongTienComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
