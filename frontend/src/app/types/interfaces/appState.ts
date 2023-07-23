import { AuthState } from "./authState";
import { MoviesState } from "./moviesState";

export interface AppState {
  movies: MoviesState;
  auth: AuthState;
}