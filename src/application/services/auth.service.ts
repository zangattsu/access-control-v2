import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/domain/users/specifications/dtos/user.dto';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: UserDto) {
    const exists = await this.usersService.getByEmail(dto.email);
    if (exists) {
      throw new UnauthorizedException('Email already registered');
    }
    const user = await this.usersService.create(dto);
    return this.signUser(user);
  }

  async login(email: string, password: string) {
    const user = await this.usersService.getByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    const ok = await argon2.verify(user.passwordHash, password);
    if (!ok) throw new UnauthorizedException('Invalid credentials');
    return this.signUser(user);
  }

  private signUser(user: any) {
    const payload = { sub: user.id, email: user.email, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}