import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './componenents/login/login.component';
import { HomeComponent } from './componenents/home/home.component';
import { BsNavbarComponent } from './componenents/bs-navbar/bs-navbar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent,HomeComponent,BsNavbarComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CoreModule { }
