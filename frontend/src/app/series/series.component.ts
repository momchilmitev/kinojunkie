import { Component, OnInit } from '@angular/core';
import { AppState, Movie } from '@types';
import { Store, select } from '@ngrx/store';
import * as MoviesActions from '../shared/stores/movies/actions';
import { Observable } from 'rxjs';
import { isLoadingSelector, errorSelector, seriesSelector } from '../shared/stores/movies/selectors';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  series$!: Observable<Movie[]>;

  constructor ( private strore: Store<AppState> ) {
    this.isLoading$ = this.strore.pipe(select(isLoadingSelector));
    this.error$ = this.strore.pipe(select(errorSelector));
    this.series$ = this.strore.pipe(select(seriesSelector));
  }

  ngOnInit (): void {
    this.strore.dispatch(MoviesActions.getSeries());
  }
}
