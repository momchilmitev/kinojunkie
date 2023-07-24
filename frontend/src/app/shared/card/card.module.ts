import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card.component';
import { MaterialModule } from '../material/material.module'

@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    MaterialModule,
    RouterModule,
  ],
  exports: [
    CardComponent,
  ]
})
export class CardModule { }