import { IsString, IsNotEmpty, IsNumber, IsInt, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsInt()
  @IsNotEmpty()
  quantity: number;
}

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsInt()
  @IsOptional()
  quantity?: number;
}