import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'new.user@example.com', description: 'Email único do usuário' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Maria Silva', description: 'Nome do usuário', minLength: 3 })
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @ApiProperty({ example: 'StrongP@ssw0rd', description: 'Senha do usuário', minLength: 8 })
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
