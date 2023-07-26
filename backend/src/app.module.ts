import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movies/movies.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { StripeModule } from './stripe/stripe.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:root@kinojunkie-mongo:27017', {
      dbName: 'kinojunkie',
    }),
    MovieModule,
    AuthModule,
    UsersModule,
    StripeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
