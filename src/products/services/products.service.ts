import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { Repository } from 'typeorm';
import { CreateProductDTO, UpdateProductDTO } from '../dtos/product.dto';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,
  ) {}

  public async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  public async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) throw new NotFoundException(`Product #${id} not found`);

    return product;
  }

  public async create(payload: CreateProductDTO): Promise<Product> {
    const newProduct = Product.create(payload);
    await this.productRepository.save(newProduct);
    return newProduct;
  }

  public async update(id: number, payload: UpdateProductDTO) {
    const product = await this.findOne(id);
    this.productRepository.merge(product, payload);
    return await this.productRepository.save(product);
  }

  public async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
    return;
  }
}
