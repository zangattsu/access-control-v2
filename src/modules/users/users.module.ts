import { Module } from '@nestjs/common';
import { UsersController } from '../../presentation/controllers/users.controller';
import { UsersService } from 'src/application/users.service';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}