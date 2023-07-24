import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from './movie.schema';
@Injectable()
export class MoviesService {
  constructor(@InjectModel(Movie.name) private movieModel: Model<Movie>) {}

  async findAll(): Promise<Movie[]> {
    return this.movieModel.find().exec();
  }

  async findAllMovies(): Promise<Movie[]> {
    return this.movieModel.find({ type: 'movie' }).exec();
  }

  async findAllSeries(): Promise<Movie[]> {
    return this.movieModel.find({ type: 'tv series' }).exec();
  }

  async findRecord(id: string): Promise<Movie> {
    return this.movieModel.findOne({ _id: id }).exec();
  }
}
