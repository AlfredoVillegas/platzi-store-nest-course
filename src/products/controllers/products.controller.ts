import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/auth/models/roles.model';
import { CreateProductDTO, UpdateProductDTO } from '../dtos/product.dto';
import { ProductsService } from '../services/products.service';

@UseGuards(JwtGuard, RolesGuard)
@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getProducts(@Query() queryParams: any) {
    const { limit, offset } = queryParams;
    //return `limit: ${limit} --- offset: ${offset} `;
    return this.productService.findAll();
  }

  @Get('/products/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    return this.productService.findOne(+productId);
  }

  @Roles(Role.ADMIN)
  @Post()
  create(@Body() body: CreateProductDTO) {
    return this.productService.create(body);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateProductDTO,
  ) {
    return this.productService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.remove(id);
  }
}

// order, user , customer, brand
