import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { CardModule } from '../shared/card/card.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../shared/stores/movies/reducers';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from '../shared/stores/movies/effects';
@NgModule({
  declarations: [
    MoviesComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    CardModule,
    StoreModule.forFeature('movies', reducers),
    EffectsModule.forFeature([MoviesEffects]),
  ]
})
export class MoviesModule { }
