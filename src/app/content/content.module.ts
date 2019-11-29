import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { ThongtincanhanComponent } from './thongtincanhan/thongtincanhan.component';
import { ThongTinDiemComponent } from './thong-tin-diem/thong-tin-diem.component';
import { ThongTinQthtComponent } from './thong-tin-qtht/thong-tin-qtht.component';
import { LichSuDongTienComponent } from './lich-su-dong-tien/lich-su-dong-tien.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';




@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    ToastrModule,
    MatTableModule,
    MatExpansionModule,
    MatButtonModule,
    HttpClientModule,
  ],
  declarations: [
    ThongtincanhanComponent,
    MainContentComponent,
    ThongTinDiemComponent,
    ThongTinQthtComponent,
    LichSuDongTienComponent,
    LayoutComponent
  ]
})
export class MyModuleModule { }
