import { Movie } from './movie';

export interface MoviesStore {
  isLoading: boolean;
  records: Movie[];
  movies: Movie[];
  series: Movie[];
  error: string | null;
}