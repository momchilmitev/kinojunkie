import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card.component';
import { MaterialModule } from '../material/material.module'
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    CardComponent,
  ]
})
export class CardModule { }