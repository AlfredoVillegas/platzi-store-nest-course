import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from 'src/config';
import { ProductsService } from 'src/products/services/products.service';
import { Order } from '../entities/Order.entitiy';
import { User } from '../entities/User.entity';

@Injectable()
export class UsersService {
  private counterId = 0;
  private users: User[] = [
    {
      id: 100,
      name: 'user 100',
    },
    {
      id: 102,
      name: 'user 102',
    },
  ];

  constructor(
    private productsServices: ProductsService,
    //private configS: ConfigService,
    @Inject(config.KEY) private configS: ConfigType<typeof config>,
  ) {}

  async getPg() {
    console.log('s');
  }

  public findAll(): User[] {
    return this.users;
  }

  public findOne(id: number): User {
    const user = this.users.find((user) => (user.id = id));
    if (!user) throw new NotFoundException(`User #${id} not found`);

    return user;
  }

  public getOrdersByUser(userId: number): Order {
    const user = this.findOne(userId);
    //console.log(this.configS.get('API_KEY'));
    //console.log(this.configS.get('DATABASE_NAME'));
    console.log(this.configS.database.name);
    console.log(this.configS.apiKey);

    return {
      date: new Date(),
      user,
      products: this.productsServices.findAll(),
    };
  }
}
