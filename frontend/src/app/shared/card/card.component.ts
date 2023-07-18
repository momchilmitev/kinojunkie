import { Component, Input } from '@angular/core';
import { Movie } from '@types';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() movie!: Movie;
}
