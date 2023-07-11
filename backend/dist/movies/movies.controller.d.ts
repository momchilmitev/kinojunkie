import { MoviesService } from './movies.service';
import { Movie } from './movie.schema';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    findAll(): Promise<Movie[]>;
}
