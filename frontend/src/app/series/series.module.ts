import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesComponent } from './series.component';
import { CardModule } from '../shared/card/card.module';
@NgModule({
  declarations: [
    SeriesComponent,
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    CardModule
  ]
})
export class SeriesModule { }
