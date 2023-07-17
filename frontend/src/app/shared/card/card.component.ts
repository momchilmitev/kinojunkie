import { Component, Input } from '@angular/core';

interface Movie {
  id: string,
  title: string,
  poster_large: string,
  poster_small: string,
  year: number,
  duration: number
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() movie!: Movie;
}
