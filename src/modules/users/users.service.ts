import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as argon2 from 'argon2';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async create(data: CreateUserDto) {
    const hash = await argon2.hash(data.password);
    return this.prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        passwordHash: hash,
      },
    });
  }
}