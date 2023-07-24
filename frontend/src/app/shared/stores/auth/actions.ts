import { createAction, props } from "@ngrx/store";

export const login = createAction('[Auth] Login', props<any>());

export const loginSuccess = createAction('[Auth] Login success', props<{ token: string }>());

export const loginFailure = createAction('[Auth] Login failure', props<{ error: string }>());

export const logout = createAction('[Auth] Logout');

export const updateUser = createAction('[Auth] Update user', props<any>());

export const updateUserSuccess = createAction('[Auth] Update user success', props<any>());

export const updateUserFailure = createAction('[Auth] Update user failure', props<any>());
