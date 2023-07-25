import { createReducer, on } from "@ngrx/store";
import { MoviesState } from "@types";
import * as moviesActions from './actions';

export const initialState: MoviesState = {
  isLoading: false,
  bookmarking: false,
  records: [],
  movies: [],
  series: [],
  bookmarks: [],
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
  on(moviesActions.bookmark, (state) => ({ ...state, bookmarking: true })),
  on(moviesActions.bookmarkSuccess, (state, action) => ({
    ...state,
    bookmarking: false,
  })),
  on(moviesActions.bookmarkFailure, (state, action) => ({
    ...state,
    bookmarking: false,
    error: action.error,
  })),
  on(moviesActions.unbookmark, (state) => ({ ...state, bookmarking: true })),
  on(moviesActions.unbookmarkSuccess, (state, action) => ({
    ...state,
    bookmarking: false,
  })),
  on(moviesActions.unbookmarkFailure, (state, action) => ({
    ...state,
    bookmarking: false,
    error: action.error,
  })),
  on(moviesActions.getBookmarks, (state) => ({ ...state, bookmarking: true })),
  on(moviesActions.getBookmarksSuccess, (state, action) => ({
    ...state,
    bookmarking: false,
    bookmarks: action.bookmarks,
  })),
  on(moviesActions.getBookmarksFailure, (state, action) => ({
    ...state,
    bookmarking: false,
    error: action.error,
  })),
);