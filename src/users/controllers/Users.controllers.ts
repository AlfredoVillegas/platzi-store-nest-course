import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from '../services/users.services';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(@Query() queryParams: any) {
    const { limit, offset } = queryParams;
    //return `limit: ${limit} --- offset: ${offset} `;
    return this.usersService.findAll();
  }

  @Get('/products/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Get(':id/orders')
  getOrders(@Param('id', ParseIntPipe) id: number) {
    //const { limit, offset } = queryParams;
    //return `limit: ${limit} --- offset: ${offset} `;
    return this.usersService.getOrdersByUser(id);
  }
}
