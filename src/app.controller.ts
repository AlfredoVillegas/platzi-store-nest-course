import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('new-endpoint')
  newEndpoint() {
    return 'yo soy nuevo';
  }

  @Get('/ruta')
  hello() {
    return 'yo soy hello';
  }
}
