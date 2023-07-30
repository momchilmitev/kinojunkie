import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartButtonComponent } from './add-to-cart-button.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [AddToCartButtonComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    AddToCartButtonComponent,
  ]
})
export class AddToCartButtonModule { }
