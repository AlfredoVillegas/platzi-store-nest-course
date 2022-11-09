import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { productsProviders } from './products.providers';
import { ProductsService } from './services/products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ...productsProviders],
  exports: [ProductsService],
})
export class ProductsModule {}
