import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDTO, UpdateProductDTO } from '../dtos/product.dto';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 0;
  private products: Product[] = [
    {
      id: 0,
      name: 'Product 1',
      description: 'ia iasd jkd',
      price: 12,
      stock: 5,
      imageUrl: '',
    },
  ];

  public findAll(): Product[] {
    return this.products;
  }

  public findOne(id: number): Product {
    const product = this.products.find((product) => (product.id = id));
    if (!product) throw new NotFoundException(`Product #${id} not found`);

    return product;
  }

  public create(payload: CreateProductDTO): Product {
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  public updated(id: number, payload: UpdateProductDTO) {
    const product = this.findOne(id);
    if (!product) return null;
    const index = this.products.findIndex((item) => item.id == product.id);
    this.products[index] = { ...product, ...payload };
    return this.products[index];
  }

  public remove(id: number): void {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) throw new NotFoundException(`Product #${id} not found`);

    this.products.splice(index, 1);
  }
}
