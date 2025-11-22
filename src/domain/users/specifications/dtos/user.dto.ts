import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserFiltroDto {
  @IsOptional()
  @IsString()
  name: string;
  
  @IsOptional()
  @IsString()
  email: string;
}

export class UserResultadoDto {
  total: number;
  items: UserDto[];
}


export class UserDto {
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
