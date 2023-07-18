import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { CardModule } from '../shared/card/card.module';
@NgModule({
  declarations: [
    MoviesComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    CardModule,
  ]
})
export class MoviesModule { }
