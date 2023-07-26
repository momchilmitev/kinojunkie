import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, Movie } from '@types';
import { Observable, Subscription } from 'rxjs';
import { errorSelector, bookmarkingSelector } from '../stores/movies/selectors';
import { userSelector } from '../stores/auth/selectors';
import * as MoviesActions from '../../shared/stores/movies/actions';
import { ShoppingCartService } from '../shopping-cart.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('bubble', [
      state('start', style({
        transform: 'translateY(-37px)',
        opacity: 0,
      })),
      state('end', style({
        transform: 'translateY(0)',
        opacity: 1,
      })),
      transition('* => start', [
        animate('0.4s')
      ]),
    ])
  ],
})

export class CardComponent implements OnInit, OnDestroy {
  @Input() movie!: Movie;

  error$!: Observable<string | null>;
  user$!: Observable<any>;
  userSunscription$!: Subscription;
  isBookmarked = false;
  isBubbling = false;

  constructor (
    private store: Store<AppState>,
    private cartService: ShoppingCartService
  )
  {
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

  addToCart(item: Movie) {
    this.isBubbling = true;
    this.cartService.addItem(item);
  }

  ngOnDestroy (): void {
    this.userSunscription$.unsubscribe();
  }
}
