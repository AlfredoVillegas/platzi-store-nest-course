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
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProductDTO, UpdateProductDTO } from '../dtos/product.dto';
import { ProductsService } from '../services/products.service';

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

  @Post()
  create(@Body() body: CreateProductDTO) {
    return this.productService.create(body);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateProductDTO,
  ) {
    return this.productService.updated(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.remove(id);
  }
}

// order, user , customer, brand
