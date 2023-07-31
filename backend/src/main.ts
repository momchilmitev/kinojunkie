import mkcert from 'mkcert';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const ca = await mkcert.createCA({
    organization: 'Hello CA',
    countryCode: 'NP',
    state: 'Bagmati',
    locality: 'Kathmandu',
    validityDays: 365,
  });

  // then create a tls certificate
  const cert = await mkcert.createCert({
    domains: ['127.0.0.1', 'localhost', '0.0.0.0'],
    validityDays: 365,
    caKey: ca.key,
    caCert: ca.cert,
  });

  const httpsOptions = {
    key: cert.key,
    cert: cert.cert,
  };

  const app = await NestFactory.create(AppModule, { httpsOptions });
  app.enableCors();
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
