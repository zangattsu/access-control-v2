import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import * as argon2 from 'argon2';
import { UserDto } from 'src/domain/users/specifications/dtos/user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async create(data: UserDto) {
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