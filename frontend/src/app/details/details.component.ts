import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../types/interfaces/movie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  constructor(private activatedRoute: ActivatedRoute) {}

  record!: Movie;
  private routeSubscription!: Subscription;

  ngOnInit (): void {
    this.routeSubscription = this.activatedRoute.data.subscribe(
      ({record}) => {
        this.record = record;
      });
  }

  ngOnDestroy (): void {
    this.routeSubscription.unsubscribe();
  }
}
