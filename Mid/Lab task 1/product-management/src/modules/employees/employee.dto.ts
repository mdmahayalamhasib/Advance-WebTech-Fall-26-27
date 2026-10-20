import { IsString, IsNotEmpty, IsInt, IsOptional } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsInt()
  @IsNotEmpty()
  age: number;

  @IsInt()
  @IsNotEmpty()
  yearsOfWorking: number;
}

export class UpdateEmployeeDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsInt()
  @IsOptional()
  age?: number;

  @IsInt()
  @IsOptional()
  yearsOfWorking?: number;
}