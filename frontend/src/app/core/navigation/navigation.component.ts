import { Component } from '@angular/core';
import { AppState } from '@types';
import { Store, select } from '@ngrx/store';
import * as AuthActions from '../../shared/stores/auth/actions';
import { Observable } from 'rxjs';
import { tokenSelector, userSelector } from '../../shared/stores/auth/selectors';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/shared/shopping-cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  token$!: Observable<string | null>;
  user$!: Observable<any>;
  isDarkMode = false;

  constructor (
    private store: Store<AppState>,
    private router: Router,
    private cartService: ShoppingCartService,
  ) {
    this.token$ = this.store.pipe(select(tokenSelector));
    this.user$ = this.store.pipe(select(userSelector));
  }
  logout() {
    this.store.dispatch(AuthActions.logout());
    this.router.navigate(['/login'])
  }

  toggleMode() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.body.classList.add('mat-app-background')
    } else {
      document.body.classList.remove('mat-app-background')
    }
  }

  openCart() {
    this.cartService.openDialog()
  }

  cartLength() {
    return this.cartService.cartCount;
  }
}
