import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,                // only accpets the set properties from the dto
    forbidNonWhitelisted: true,     // throws error if found any unwanted property that is not available in dto
    transform: true,                // transforms the incoming request body into the whatever type is mentioned
  }));
  await app.listen(3000);
}
bootstrap();
