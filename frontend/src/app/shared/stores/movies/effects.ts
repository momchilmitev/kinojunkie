import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MoviesService } from "../../movies.service";
import * as MoviesActions from './actions';
import { catchError, map, mergeMap, of, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "@types";

@Injectable()
export class MoviesEffects {
  constructor(private actions$: Actions, private moviesService: MoviesService, private store: Store<AppState>) {}
  
  getRecords$ = createEffect(() => 
    this.actions$.pipe(
      ofType(MoviesActions.getRecords),
      mergeMap(() => {
        return this.moviesService.all().pipe(
          map(
            (records) => MoviesActions.getRecordsSuccess({ records }),
            catchError(
              (err) => of(MoviesActions.getRecordsFailure({ error: err.message }))
            )
          )
        );
      })
    )
  );

  getMovies$ = createEffect(() => 
    this.actions$.pipe(
      ofType(MoviesActions.getMovies),
      mergeMap(() => {
        return this.moviesService.allMovies().pipe(
          map(
            (movies) => MoviesActions.getMoviesSuccess({ movies }),
            catchError(
              (err) => of(MoviesActions.getMoviesFailure({ error: err.message }))
            )
          )
        );
      })
    )
  );

  getSeries$ = createEffect(() => 
    this.actions$.pipe(
      ofType(MoviesActions.getSeries),
      mergeMap(() => {
        return this.moviesService.allSeries().pipe(
          map(
            (series) => MoviesActions.getSeriesSuccess({ series }),
            catchError(
              (err) => of(MoviesActions.getSeriesFailure({ error: err.message }))
            )
          )
        );
      })
    )
  );

  getBookmarks$ = createEffect(() => 
    this.actions$.pipe(
      ofType(MoviesActions.getBookmarks),
      withLatestFrom(this.store),
      mergeMap(([action, appStore]) => {
        return this.moviesService.getBookmarks(appStore.auth.user.sub || appStore.auth.user.id).pipe(
          map(
            (bookmarks) => MoviesActions.getBookmarksSuccess({ bookmarks }),
            catchError(
              (err) => of(MoviesActions.getBookmarksFailure({ error: err.message }))
            )
          )
        );
      })
    )
  );

  bookmark$ = createEffect(() => 
    this.actions$.pipe(
      ofType(MoviesActions.bookmark),
      withLatestFrom(this.store),
      mergeMap(([action, appStore]) => {
        return this.moviesService.bookmark({ user_id: appStore.auth.user.sub || appStore.auth.user.id, record_id: action.record_id }).pipe(
          map(
            () => MoviesActions.bookmarkSuccess(),
            catchError(
              (err) => of(MoviesActions.bookmarkFailure({ error: err.message }))
            )
          )
        );
      })
    )
  );

  unbookmark$ = createEffect(() => 
    this.actions$.pipe(
      ofType(MoviesActions.unbookmark),
      withLatestFrom(this.store),
      mergeMap(([action, appStore]) => {
        return this.moviesService.unbookmark({ user_id: appStore.auth.user.sub || appStore.auth.user.id, record_id: action.record_id }).pipe(
          map(
            () => MoviesActions.unbookmarkSuccess(),
            catchError(
              (err) => of(MoviesActions.unbookmarkFailure({ error: err.message }))
            )
          )
        );
      })
    )
  );

}