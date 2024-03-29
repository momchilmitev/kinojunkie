import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card.component';
import { MaterialModule } from '../material/material.module'
import { CommonModule } from '@angular/common';
import { AddToCartButtonModule } from '../add-to-cart-button/add-to-cart-button.module';
import { BookmarkButtonModule } from '../bookmark-button/bookmark-button.module';
@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    AddToCartButtonModule,
    BookmarkButtonModule,
  ],
  exports: [
    CardComponent,
  ]
})
export class CardModule { }