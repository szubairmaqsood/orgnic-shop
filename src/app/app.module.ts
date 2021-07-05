import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ShoppingModule } from './shopping/shopping.module';




@NgModule({
  declarations: [
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminModule,
    SharedModule,
    CoreModule,
    ShoppingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
