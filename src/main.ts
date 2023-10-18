import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({origin:"https://sfectoria.com/"})
  app.setGlobalPrefix('/api/v1');
  await app.listen(5005);
}
bootstrap();
