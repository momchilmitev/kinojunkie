import { createSelector } from "@ngrx/store";
import { AppState } from "@types";

export const selectFeature = (state: AppState) => state.auth;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading)

export const tokenSelector = createSelector(selectFeature, (state) => state.token)

export const errorSelector = createSelector(selectFeature, (state) => state.error)