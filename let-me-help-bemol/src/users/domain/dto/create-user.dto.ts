import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'User email should be unique',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User phone should be unique',
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: 'User name should be not empty string',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description:
      'User cep should be a valid cep from Amazonas, in the format: xxxxxxxx',
  })
  @IsString()
  @IsNotEmpty()
  cep: string;

  @ApiProperty({
    description: 'User age should be over 18',
  })
  @IsInt()
  @Min(18)
  @Max(120)
  @IsNotEmpty()
  age: number;
}
