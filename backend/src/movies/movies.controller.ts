import { Controller, Get } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './movie.schema';

@Controller('records')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async findAll(): Promise<Movie[]> {
    const movies = await this.moviesService.findAll();
    return movies;
  }

  @Get('movies')
  async findAllMovies(): Promise<Movie[]> {
    const movies = await this.moviesService.findAllMovies();
    return movies;
  }

  @Get('series')
  async findAllseries(): Promise<Movie[]> {
    const movies = await this.moviesService.findAllSeries();
    return movies;
  }
}