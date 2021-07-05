import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/componenents/login/login.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';

const routes: Routes = [
  { path: '', component: ProductCardComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
