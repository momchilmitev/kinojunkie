import {inject} from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '@types';
import { Store, select } from '@ngrx/store';
import { tokenSelector } from '../shared/stores/auth/selectors';
import { of, switchMap } from 'rxjs';

export const authGuard = () => {
  const router = inject(Router);
  const store = inject(Store<AppState>);
  const token$ = store.pipe(select(tokenSelector));

  return token$.pipe(
    switchMap(t => {
      if (t) {
        return of(true);
      } else {
        router.navigate(["/login"]);
        return of(false);
      }
    })
  )
};