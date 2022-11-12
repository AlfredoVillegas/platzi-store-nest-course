import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/decorators/public.decorator';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { UsersService } from '../services/users.services';

@UseGuards(JwtGuard)
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Public()
  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  createUser(@Body() body: any) {
    return this.usersService.create(body);
  }

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
    return {}; //this.usersService.getOrdersByUser(id);
  }
}
