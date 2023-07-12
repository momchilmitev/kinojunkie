import { Model } from 'mongoose';
import { Movie } from './movie.schema';
export declare class MoviesService {
    private movieModel;
    constructor(movieModel: Model<Movie>);
    findAll(): Promise<Movie[]>;
}
