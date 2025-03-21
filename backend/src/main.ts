import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap()
  .then((res) => {
    console.log('res', res);
  })
  .catch((err) => {
    console.log('bootstrap err', err);
  });
