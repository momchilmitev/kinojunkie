import jwt_decode from "jwt-decode";
import { createReducer, on } from "@ngrx/store";
import { AuthState } from "src/app/types/interfaces/authState";
import * as AuthActions from './actions';

export const initialState: AuthState = {
  isLoading: false,
  token: '',
  user: null,
  error: null,
}

export const reducers = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({ ...state, isLoading: true })),
  on(AuthActions.loginSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    token: action.token,
    user: jwt_decode(action.token)
  })),
  on(AuthActions.loginFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(AuthActions.logout, (state) => ({ ...state, token: '', user: null })),
  on(AuthActions.updateUser, (state) => ({ ...state, isLoading: true })),
  on(AuthActions.updateUserSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    user: action.user
  })),
  on(AuthActions.updateUserFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
);