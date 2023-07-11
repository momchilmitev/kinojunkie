import { Model } from 'mongoose';
import { Connection } from 'mongoose';
import { Movie } from './movie.schema';
export declare class MoviesService {
    private connection;
    private movieModel;
    constructor(connection: Connection, movieModel: Model<Movie>);
    findAll(): Promise<Movie[]>;
}
