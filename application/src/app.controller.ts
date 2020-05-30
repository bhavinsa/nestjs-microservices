import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, ClientProxy, Transport, Client, ClientProxyFactory } from '@nestjs/microservices';


@Controller()
export class AppController {
  private readonly client: ClientProxy;

  constructor(private readonly appService: AppService) {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'user-microservices',
		    port: 3001,
	},
    });
  }

  @Get('/app')
	getUserApi() {
		return {'name':'app'};
  }
  
  @Get('/data')
  listMovies() {
    const pattern = { cmd: 'LIST_MOVIES' };
    return this.client.send<string[]>(pattern, []);
  }
}
