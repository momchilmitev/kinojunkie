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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor ( private moviesServise: MoviesService ) {}

  records: Movie[] = [];

  ngOnInit (): void {
    this.moviesServise.all().subscribe(r => this.records = r)
  }
}
