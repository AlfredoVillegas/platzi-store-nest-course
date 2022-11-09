import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateProductDTO } from '../dtos/product.dto';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({})
  price: number;
  @Column({})
  stock: number;
  @Column({})
  imageUrl: string;

  static create(newProduct: CreateProductDTO): Product {
    const product = new Product();
    product.name = newProduct.name;
    product.description = newProduct.description;
    product.imageUrl = newProduct.imageUrl;
    product.price = newProduct.price;
    product.stock = newProduct.stock;
    return product;
  }
}
