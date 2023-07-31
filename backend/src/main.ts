import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const httpsOptions = {
    key: readFileSync(resolve(__dirname, 'assets/cert.key')),
    cert: readFileSync(resolve(__dirname, 'assets/cert.crt')),
  };

  const app = await NestFactory.create(AppModule, { httpsOptions });
  app.enableCors();
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
