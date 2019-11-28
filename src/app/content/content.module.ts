import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { ThongtincanhanComponent } from './thongtincanhan/thongtincanhan.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';




@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
  ],
  declarations: [
    ThongtincanhanComponent,
    MainContentComponent
  ]
})
export class MyModuleModule { }
