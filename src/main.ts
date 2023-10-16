import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({optionsSuccessStatus:200,credentials:true, });
  app.setGlobalPrefix('/api/v1');
  await app.listen(9000);
}
bootstrap();
