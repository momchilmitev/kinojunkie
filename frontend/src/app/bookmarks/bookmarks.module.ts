import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { BookmarksComponent } from './bookmarks.component';
import { CardModule } from '../shared/card/card.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../shared/stores/movies/reducers';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from '../shared/stores/movies/effects';
@NgModule({
  declarations: [
    BookmarksComponent
  ],
  imports: [
    CommonModule,
    BookmarksRoutingModule,
    CardModule,
    StoreModule.forFeature('movies', reducers),
    EffectsModule.forFeature([MoviesEffects]),
  ]
})
export class BookmarksModule { }
