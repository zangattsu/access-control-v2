import { Module } from '@nestjs/common';
import { UsersController } from '../presentation/controllers/users.controller';
import { UsersService } from 'src/application/services/users.service';
import { UserRepository } from '../infrastructure/persistence/repositories/user.repository';
import { PrismaService } from 'src/infrastructure/common/prisma/prisma.service';

@Module({
  providers: [UsersService, UserRepository, PrismaService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule { }