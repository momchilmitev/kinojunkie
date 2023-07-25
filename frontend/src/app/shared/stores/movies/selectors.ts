import { createSelector } from "@ngrx/store";
import { AppState } from "@types";

export const selectFeature = (state: AppState) => state.movies;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading)

export const bookmarkingSelector = createSelector(selectFeature, (state) => state.bookmarking)

export const recordsSelector = createSelector(selectFeature, (state) => state.records)

export const moviesSelector = createSelector(selectFeature, (state) => state.movies)

export const seriesSelector = createSelector(selectFeature, (state) => state.series)

export const bookmarksSelector = createSelector(selectFeature, (state) => state.bookmarks)

export const errorSelector = createSelector(selectFeature, (state) => state.error)