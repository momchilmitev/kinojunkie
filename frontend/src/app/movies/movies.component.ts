import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { Movie } from '@types';
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
