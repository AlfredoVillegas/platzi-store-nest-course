import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config';
import { BrandsController } from './controllers/brands/brands.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { DatabaseModule } from './database/database.module';
import { enviroments } from './enviroments';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
    }),
    UsersModule,
    ProductsModule,
    DatabaseModule,
  ],
  controllers: [
    AppController,
    CategoriesController,
    OrdersController,
    CustomersController,
    BrandsController,
  ],
  providers: [AppService],
})
export class AppModule {}
