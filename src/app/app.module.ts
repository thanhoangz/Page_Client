import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainContentComponent } from './content/main-content/main-content.component';
import { ThongtincanhanComponent } from './content/thongtincanhan/thongtincanhan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';
import { ThongTinDiemComponent } from './content/thong-tin-diem/thong-tin-diem.component';
import { ThongTinQthtComponent } from './content/thong-tin-qtht/thong-tin-qtht.component';
import { LichSuDongTienComponent } from './content/lich-su-dong-tien/lich-su-dong-tien.component';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { InforManagerComponent } from './infor-manager/infor-manager.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './content/layout/layout.component';
import { CourseComponent } from './course/course.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutUsComponent,
    MainContentComponent,
    ThongtincanhanComponent,
    ThongTinDiemComponent,
    ThongTinQthtComponent,
    LichSuDongTienComponent,
    InforManagerComponent,
    ContactComponent,
    LayoutComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    ToastrModule,
    MatTableModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]

})




export class AppModule { }
