import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Movie {
  id: string,
  title: string,
  poster_large: string,
  poster_small: string,
  year: number,
  duration: number
}
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  constructor (
    private http: HttpClient
  ) {}

  movies: Movie[] = []

  ngOnInit (): void {
    this.http.get<Movie[]>('http://0.0.0.0:3000/movies').subscribe(v => {
      console.log(v);
      this.movies = v
    })
  }

  imageLoaded() {
    console.log('image loaded');
    
  }
}
