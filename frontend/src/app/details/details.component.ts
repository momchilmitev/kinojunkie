import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../types/interfaces/movie';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../types/interfaces/appState';
import { ShoppingCartService } from '../shared/shopping-cart.service';
import * as MoviesActions from '../shared/stores/movies/actions';
import { userSelector } from '../shared/stores/auth/selectors';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  user$!: Observable<any>;
  userSunscription$!: Subscription;
  isBookmarked = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,
    private cartService: ShoppingCartService
  ) {
    this.user$ = this.store.pipe(select(userSelector));
  }

  record!: Movie;
  private routeSubscription!: Subscription;

  ngOnInit (): void {
    this.routeSubscription = this.activatedRoute.data.subscribe(
      ({record}) => {
        this.record = record;
        this.chekIsBookmarked();
      });
  }

  bookmark() {
    if (this.isBookmarked) {
      this.store.dispatch(MoviesActions.unbookmark({ record_id: this.record._id}));
      this.isBookmarked = false
    } else if (!this.isBookmarked) {
      this.store.dispatch(MoviesActions.bookmark({ record_id: this.record._id}));
      this.isBookmarked = true
    }
    this.store.dispatch(MoviesActions.getBookmarks());
  }

  chekIsBookmarked() {
    this.userSunscription$ = this.user$.subscribe(u => {
      const userId = u ? u.sub || u.id : null;
      
      if (userId && this.record.bookmarked_by.includes(userId)) {
        this.isBookmarked = true
      }
    })
  }

  addToCart(item: Movie) {
    this.cartService.addItem(item);
  }

  ngOnDestroy (): void {
    this.routeSubscription.unsubscribe();
    this.userSunscription$.unsubscribe();
  }
}
