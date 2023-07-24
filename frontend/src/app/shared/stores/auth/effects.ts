import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as AuthActions from './actions';
import { catchError, map, mergeMap, of, withLatestFrom } from "rxjs";
import { AuthService } from "../../auth.service";
import { Store, select } from "@ngrx/store";
import { AppState } from "@types";
import { userSelector } from '../../../shared/stores/auth/selectors';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private store: Store<AppState>) {}

  getRecords$ = createEffect(() => 
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap((action) => {
        return this.authService.login(action).pipe(
          map(
            (res) => AuthActions.loginSuccess({ token: res.access_token }),
            catchError(
              (err) => of(AuthActions.loginFailure({ error: err.message }))
            )
          )
        );
      })
    )
  );

  updateUser$ = createEffect(() => 
  this.actions$.pipe(
    ofType(AuthActions.updateUser),
    withLatestFrom(this.store),
    mergeMap(([action, appStore]) => {
      return this.authService.updateUser({ ...action, id: appStore.auth.user.sub || appStore.auth.user.id}).pipe(
        map(
          (user) => AuthActions.updateUserSuccess({ user }),
          catchError(
            (err) => of(AuthActions.updateUserFailure({ error: err.message }))
          )
        )
      );
    })
  )
);
};