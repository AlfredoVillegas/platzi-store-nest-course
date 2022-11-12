import { Module } from '@nestjs/common';
import { ProductsModule } from 'src/products/products.module';
import { UsersController } from './controllers/Users.controllers';
import { UsersService } from './services/users.services';
import { usersProviders } from './users.providers';

@Module({
  imports: [ProductsModule],
  providers: [UsersService, ...usersProviders],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
