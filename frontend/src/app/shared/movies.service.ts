import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '@types';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient) { }

  all() {
    return this.http.get<Movie[]>('http://0.0.0.0:3000/records');
  }

  allMovies() {
    return this.http.get<Movie[]>('http://0.0.0.0:3000/records/movies');
  }

  allSeries() {
    return this.http.get<Movie[]>('http://0.0.0.0:3000/records/series');
  }

  getRecord(id: string) {
    return this.http.get<Movie>('http://0.0.0.0:3000/records/details', { params: { id } });
  }

  getBookmarks(id: string) {
    return this.http.get<Movie[]>('http://0.0.0.0:3000/records/bookmarks', { params: { id } });
  }
 
  bookmark(data: { user_id: any; record_id: any }) {
    return this.http.put('http://0.0.0.0:3000/records/bookmark', { data });
  }

  unbookmark(data: { user_id: any; record_id: any }) {
    return this.http.put('http://0.0.0.0:3000/records/unbookmark', { data });
  }
}
