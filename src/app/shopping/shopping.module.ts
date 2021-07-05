import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShippingCartSummaryComponent } from './components/shipping-cart-summary/shipping-cart-summary.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';


@NgModule({
  declarations: [
    ShoppingCartComponent,
    ShippingFormComponent,
    ShippingCartSummaryComponent,
    ProductFilterComponent, 
    
    OrderSuccessComponent
  ],
  imports: []
})
export class ShoppingModule { }
