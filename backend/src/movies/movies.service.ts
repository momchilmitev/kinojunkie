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

  async findAllBookmarks(user_id: string): Promise<Movie[]> {
    return this.movieModel.find({ bookmarked_by: { $in: [user_id] } }).exec();
  }

  async findRecord(id: string): Promise<Movie> {
    return this.movieModel.findById({ _id: id }).exec();
  }

  async bookmarkRecord(data: {
    user_id: string;
    record_id: string;
  }): Promise<Movie> {
    return this.movieModel
      .findOneAndUpdate(
        { _id: data.record_id },
        { $push: { bookmarked_by: data.user_id } },
      )
      .exec();
  }

  async unbookmarkRecord(data: {
    user_id: string;
    record_id: string;
  }): Promise<Movie> {
    return this.movieModel.findOneAndUpdate(
      { _id: data.record_id },
      { $pull: { bookmarked_by: data.user_id } },
    );
  }
}
