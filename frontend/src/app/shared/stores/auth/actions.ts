import { createAction, props } from "@ngrx/store";

export const login = createAction('[Auth] Login', props<any>());

export const loginSuccess = createAction('[Auth] Login success', props<{ token: string }>());

export const loginFailure = createAction('[Auth] Login failure', props<{ error: string }>());

export const logout = createAction('[Auth] Logout');
