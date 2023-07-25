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

export const bookmark = createAction('[Movies] Bookmark record', props<{ record_id: any }>());

export const bookmarkSuccess = createAction('[Movies] Bookmark record success');

export const bookmarkFailure = createAction('[Movies] Bookmark record failure', props<{ error: string }>());

export const unbookmark = createAction('[Movies] Unbookmark record', props<{ record_id: any }>());

export const unbookmarkSuccess = createAction('[Movies] Unbookmark record success');

export const unbookmarkFailure = createAction('[Movies] Unbookmark record failure', props<{ error: string }>());

export const getBookmarks = createAction('[Movies] Get bookmarks');

export const getBookmarksSuccess = createAction('[Movies] Get bookmarks success', props<{ bookmarks: Movie[] }>());

export const getBookmarksFailure = createAction('[Movies] Get bookmarks failure', props<{ error: string }>());