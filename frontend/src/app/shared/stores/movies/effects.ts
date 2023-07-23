import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MoviesService } from "../../movies.service";
import * as MoviesActions from './actions';
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class MoviesEffects {
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

  constructor(private actions$: Actions, private moviesService: MoviesService) {}
}