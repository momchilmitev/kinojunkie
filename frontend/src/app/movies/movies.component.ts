import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/movies.service';

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
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  constructor (
    private moviesService: MoviesService,
  ) {}

  movies: Movie[] = []

  ngOnInit (): void {
    this.moviesService.allMovies().subscribe(m => this.movies = m)
  }
}
