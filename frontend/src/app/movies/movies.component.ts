import { Component, OnInit } from '@angular/core';
import { AppState, Movie } from '@types';
import { Store, select } from '@ngrx/store';
import * as MoviesActions from '../shared/stores/movies/actions';
import { Observable } from 'rxjs';
import { isLoadingSelector, errorSelector, moviesSelector } from '../shared/stores/movies/selectors';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  movies$!: Observable<Movie[]>;

  constructor (
    private strore: Store<AppState>
  ) {
    this.isLoading$ = this.strore.pipe(select(isLoadingSelector));
    this.error$ = this.strore.pipe(select(errorSelector));
    this.movies$ = this.strore.pipe(select(moviesSelector));
  }

  ngOnInit (): void {
    this.strore.dispatch(MoviesActions.getMovies());
  }
}
