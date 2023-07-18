import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { Movie } from '@types';
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
