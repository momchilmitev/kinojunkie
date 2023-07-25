import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, Movie } from '@types';
import { Observable, Subscription } from 'rxjs';
import { errorSelector, bookmarkingSelector } from '../stores/movies/selectors';
import { userSelector } from '../stores/auth/selectors';
import * as MoviesActions from '../../shared/stores/movies/actions';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit, OnDestroy {
  @Input() movie!: Movie;

  error$!: Observable<string | null>;
  user$!: Observable<any>;
  userSunscription$!: Subscription;
  isBookmarked = false;

  constructor (private store: Store<AppState>) {
    this.error$ = this.store.pipe(select(errorSelector));
    this.user$ = this.store.pipe(select(userSelector));
  }

  ngOnInit (): void {
    this.chekIsBookmarked();
  }

  bookmark() {
    if (this.isBookmarked) {
      this.store.dispatch(MoviesActions.unbookmark({ record_id: this.movie._id}));
      this.isBookmarked = false
    } else if (!this.isBookmarked) {
      this.store.dispatch(MoviesActions.bookmark({ record_id: this.movie._id}));
      this.isBookmarked = true
    }
    this.store.dispatch(MoviesActions.getBookmarks());
  }

  chekIsBookmarked() {
    this.userSunscription$ = this.user$.subscribe(u => {
      const userId = u ? u.sub || u.id : null;
      
      if (userId && this.movie.bookmarked_by.includes(userId)) {
        this.isBookmarked = true
      }
    })
  }

  ngOnDestroy (): void {
    this.userSunscription$.unsubscribe();
  }
}
