import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { NestMicroserviceOptions } from '@nestjs/common/interfaces/microservices/nest-microservice-options.interface';
import { MicroserviceOptions } from '@nestjs/common/interfaces/microservices/microservice-configuration.interface';


async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
      transport: Transport.TCP,
		options: {
		port: 3001,
  },
  });
  await app.listen(() => console.log('MoviesService is running.'));
}
bootstrap();