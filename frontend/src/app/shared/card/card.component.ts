import { Component, Input } from '@angular/core';

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
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() movie!: Movie;
}
