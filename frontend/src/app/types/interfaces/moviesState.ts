import { Movie } from './movie';

export interface MoviesState {
  isLoading: boolean;
  bookmarking: boolean;
  records: Movie[];
  movies: Movie[];
  series: Movie[];
  bookmarks: Movie[];
  error: string | null;
}