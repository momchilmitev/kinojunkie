import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { MaterialModule } from '../shared/material/material.module';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class ShoppingCartModule { }
