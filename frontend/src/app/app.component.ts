import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Movie {
  id: string,
  title: string,
  poster: string,
  year: number,
  duration: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  movie!: Movie

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit (): void {
    this.http.get<Movie[]>('http://0.0.0.0:3000/movies').subscribe(v => {
      this.movie = v[0]
    })
  }
}
