import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { Movie } from '@types';
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
