import { Component, OnInit } from '@angular/core';
import { AppState, Movie } from '@types';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { isLoadingSelector, errorSelector, recordsSelector } from '../shared/stores/movies/selectors';
import * as MoviesActions from '../shared/stores/movies/actions';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  records$!: Observable<Movie[]>;

  constructor ( private strore: Store<AppState> ) {
    this.isLoading$ = this.strore.pipe(select(isLoadingSelector));
    this.error$ = this.strore.pipe(select(errorSelector));
    this.records$ = this.strore.pipe(select(recordsSelector));
  }

  ngOnInit (): void {
    this.strore.dispatch(MoviesActions.getRecords());
  }
}
