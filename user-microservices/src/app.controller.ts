import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, ClientProxy, Transport, Client } from '@nestjs/microservices';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) { }
	@Get('/user')
	getUserApi() {
		return {'name':'user'};
	}
  
	@MessagePattern({ cmd: 'LIST_MOVIES' })
	listMovies(): any {
		return [
			{
				_id: '5d401b6a32eb4b45b23d33d4',
				isActive: false,
				balance: '$3,654.62',
				picture: 'http://placehold.it/32x32',
				age: 21,
				eyeColor: 'blue',
				name: 'Santiago Vinson',
				gender: 'male',
				company: 'IMANT',
				email: 'santiagovinson@imant.com',
				phone: '+1 (986) 568-2751',
				address: '885 Miami Court, Riverton, South Dakota, 2094',
			},
			{
				_id: '5d401b6ac01fc6303768e7b4',
				isActive: false,
				balance: '$1,385.00',
				picture: 'http://placehold.it/32x32',
				age: 28,
				eyeColor: 'brown',
				name: 'Floyd Velasquez',
				gender: 'male',
				company: 'POOCHIES',
				email: 'floydvelasquez@poochies.com',
				phone: '+1 (850) 436-3786',
				address: '662 Grant Avenue, Geyserville, Delaware, 4892',
			},
		];
	}
}
