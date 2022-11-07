import { Module } from '@nestjs/common';
import { ProductsModule } from 'src/products/products.module';
import { UsersController } from './controllers/Users.controllers';
import { UsersService } from './services/users.services';

@Module({
  imports: [ProductsModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
