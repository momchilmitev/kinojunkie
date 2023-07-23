import { createAction, props } from "@ngrx/store";
import { Movie } from "@types";

export const getRecords = createAction('[Movies] Get records');

export const getRecordsSuccess = createAction('[Movies] Get records success', props<{ records: Movie[] }>());

export const getRecordsFailure = createAction('[Movies] Get records failure', props<{ error: string }>());

export const getMovies = createAction('[Movies] Get movies');

export const getMoviesSuccess = createAction('[Movies] Get movies success', props<{ movies: Movie[] }>());

export const getMoviesFailure = createAction('[Movies] Get movies failure', props<{ error: string }>());

export const getSeries = createAction('[Movies] Get series');

export const getSeriesSuccess = createAction('[Movies] Get series success', props<{ series: Movie[] }>());

export const getSeriesFailure = createAction('[Movies] Get series failure', props<{ error: string }>());