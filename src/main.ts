import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,                // only accpets the set properties from the dto
    forbidNonWhitelisted: true,     // throws error if found any unwanted property that is not available in dto
    transform: true,                // transforms the incoming request body into the whatever type is mentioned
    transformOptions: {
      enableImplicitConversion: true,   // globally set type as the implicit type and not neede to explicitly set the type in the dto file
    }
  }));
  await app.listen(3000);
}
bootstrap();
