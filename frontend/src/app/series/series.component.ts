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
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  constructor ( private moviesService: MoviesService ) {}

  series: Movie[] = [];

  ngOnInit (): void {
    this.moviesService.allSeries().subscribe(s => this.series = s)
  }
}
