import { Component } from '@angular/core';
import { AppState } from '@types';
import { Store, select } from '@ngrx/store';
import * as AuthActions from '../../shared/stores/auth/actions';
import { Observable } from 'rxjs';
import { tokenSelector } from '../../shared/stores/auth/selectors';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/shared/shopping-cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  token$!: Observable<string | null>;
  isDarkMode = false;

  constructor (
    private strore: Store<AppState>,
    private router: Router,
    private cartService: ShoppingCartService,
  ) {
    this.token$ = this.strore.pipe(select(tokenSelector));
  }
  logout() {
    this.strore.dispatch(AuthActions.logout());
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
