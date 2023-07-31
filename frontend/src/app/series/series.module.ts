import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesRoutingModule } from './series-routing.module';
import { SeriesComponent } from './series.component';
import { CardModule } from '../shared/card/card.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../shared/stores/movies/reducers';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from '../shared/stores/movies/effects';
@NgModule({
  declarations: [
    SeriesComponent,
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    CardModule,
    StoreModule.forFeature('movies', reducers),
    EffectsModule.forFeature([MoviesEffects]),
  ]
})
export class SeriesModule { }
