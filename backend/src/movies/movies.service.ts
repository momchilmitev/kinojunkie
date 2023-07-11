import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { Movie } from './movie.schema';
// import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectConnection() private connection: Connection,
    @InjectModel(Movie.name) private movieModel: Model<Movie>,
  ) {}

  // async create(createMovieDto: CreateMovieDto): Promise<Movie> {
  //   const createdMovie = new this.movieModel(createMovieDto);
  //   return createdMovie.save();
  // }

  async findAll(): Promise<Movie[]> {
    return this.movieModel.find().exec();
  }
}
