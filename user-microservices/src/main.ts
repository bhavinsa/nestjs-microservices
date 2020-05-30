import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { NestMicroserviceOptions } from '@nestjs/common/interfaces/microservices/nest-microservice-options.interface';
import { MicroserviceOptions } from '@nestjs/common/interfaces/microservices/microservice-configuration.interface';


async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: 'user-microservices',
      port: 3001,
    },
  });
  // await app.listen(() => console.log('user service is running.'));
  await app.listen(() => console.log(`user service is running!!!.`))
}
bootstrap();