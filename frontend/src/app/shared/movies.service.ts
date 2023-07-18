import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Movie {
  id: string,
  title: string,
  poster_large: string,
  poster_small: string,
  year: number|string,
  duration: number|string,
  type: string,
  bookmarked_by: string[],
  description: string,
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient) { }

  all() {
    
  }

  allMovies() {
    return this.http.get<Movie[]>('http://0.0.0.0:3000/movies');
  }

  allSeries() {}
}
