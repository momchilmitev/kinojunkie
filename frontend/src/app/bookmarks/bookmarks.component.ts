import { Component, OnInit } from '@angular/core';
import { AppState, Movie } from '@types';
import { Store, select } from '@ngrx/store';
import * as MoviesActions from '../shared/stores/movies/actions';
import { Observable } from 'rxjs';
import { isLoadingSelector, errorSelector, bookmarksSelector } from '../shared/stores/movies/selectors';
// import { userSelector } from '../shared/stores/auth/selectors';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  bookmarks$!: Observable<Movie[]>;
  // user$!: Observable<any>;

  constructor (
    private store: Store<AppState>
  ) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.bookmarks$ = this.store.pipe(select(bookmarksSelector));
    // this.user$ = this.store.pipe(select(userSelector));
  }

  ngOnInit (): void {
    this.store.dispatch(MoviesActions.getBookmarks());
  }
}
