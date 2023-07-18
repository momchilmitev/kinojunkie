import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MovieDocument = HydratedDocument<Movie>;

@Schema()
export class Movie {
  @Prop()
  title: string;

  @Prop()
  poster_small: string;

  @Prop()
  poster_large: string;

  @Prop()
  year: string;

  @Prop()
  duration: string;

  @Prop()
  price: number;

  @Prop()
  type: string;

  @Prop([String])
  bookmarked_by: string[];

  @Prop()
  description: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
