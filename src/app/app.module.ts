import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainContentComponent } from './content/main-content/main-content.component';
import { ThongtincanhanComponent } from './content/thongtincanhan/thongtincanhan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      MainContentComponent,
      ThongtincanhanComponent,
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
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
