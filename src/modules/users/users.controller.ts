import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
// import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async me() {
    // This would normally use Request user, but kept simple.
    return { ok: true };
  }
}