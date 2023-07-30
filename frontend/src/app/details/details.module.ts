import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { AddToCartButtonModule } from '../shared/add-to-cart-button/add-to-cart-button.module';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    MaterialModule,
    AddToCartButtonModule,
  ]
})
export class DetailsModule { }
