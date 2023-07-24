import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { Movie } from "../types/interfaces/movie";
import { inject } from "@angular/core";
import { MoviesService } from "../shared/movies.service";

export const recordResolver: ResolveFn<Movie> = (
  route: ActivatedRouteSnapshot
) => {
  return recordResolverFn(route);
};

export const recordResolverFn = (
  route: ActivatedRouteSnapshot,
  moviesService = inject(MoviesService)
) => {
  return moviesService.getRecord(route.params['id']!);
};