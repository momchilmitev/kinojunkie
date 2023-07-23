import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as AuthActions from './actions';
import { catchError, map, mergeMap, of } from "rxjs";
import { AuthService } from "../../auth.service";

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

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
};