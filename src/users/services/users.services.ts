import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from 'src/config';
import { ProductsService } from 'src/products/services/products.service';
import { DeepPartial, Repository } from 'typeorm';
import { User } from '../entities/User.entity';

@Injectable()
export class UsersService {
  constructor(
    private productsServices: ProductsService,
    @Inject(config.KEY) private configS: ConfigType<typeof config>,
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
  ) {}

  async getPg() {
    console.log('s');
  }

  public async create(data: DeepPartial<User>): Promise<User> {
    const user = this.userRepository.create(data);
    return await this.userRepository.save(user);
  }

  public async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  public async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new NotFoundException(`User #${id} not found`);

    return user;
  }

  /*public async getOrdersByUser(userId: number): Order {
    const user = this.findOne(userId);
    //console.log(this.configS.get('API_KEY'));
    //console.log(this.configS.get('DATABASE_NAME'));
    console.log(this.configS.database.name);
    console.log(this.configS.apiKey);

    return {
      date: new Date(),
      user,
      products: await this.productsServices.findAll(),
    };
  }*/
}
