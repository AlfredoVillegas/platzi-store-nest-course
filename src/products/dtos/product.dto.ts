//import { PartialType } from '@nestjs/mapped-types';
import { PartialType } from '@nestjs/swagger';

import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  @IsString()
  readonly description: string;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly price: number;
  @IsUrl()
  @IsNotEmpty()
  readonly imageUrl: string;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: number;
}

export class UpdateProductDTO extends PartialType(CreateProductDTO) {}
