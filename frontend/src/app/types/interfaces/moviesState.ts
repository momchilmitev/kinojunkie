import { Movie } from './movie';

export interface MoviesState {
  isLoading: boolean;
  records: Movie[];
  movies: Movie[];
  series: Movie[];
  error: string | null;
}