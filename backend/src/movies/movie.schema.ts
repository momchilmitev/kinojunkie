import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MovieDocument = HydratedDocument<Movie>;

@Schema()
export class Movie {
  @Prop()
  title: string;

  @Prop()
  poster: string;

  @Prop()
  year: number;

  @Prop()
  duration: number;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
