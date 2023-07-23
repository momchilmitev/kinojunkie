import { createReducer, on } from "@ngrx/store";
import { MoviesState } from "@types";
import * as moviesActions from './actions';

export const initialState: MoviesState = {
  isLoading: false,
  records: [],
  movies: [],
  series: [],
  error: null,
};

export const reducers = createReducer(
  initialState,
  on(moviesActions.getRecords, (state) => ({ ...state, isLoading: true })),
  on(moviesActions.getRecordsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    records: action.records,
  })),
  on(moviesActions.getRecordsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(moviesActions.getMovies, (state) => ({ ...state, isLoading: true })),
  on(moviesActions.getMoviesSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    movies: action.movies,
  })),
  on(moviesActions.getMoviesFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(moviesActions.getSeries, (state) => ({ ...state, isLoading: true })),
  on(moviesActions.getSeriesSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    series: action.series,
  })),
  on(moviesActions.getSeriesFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
);