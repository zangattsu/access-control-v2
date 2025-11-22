import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { AuthService } from '../../application/auth.service';
import { LoginDto } from '../../modules/auth/dto/login.dto';
import { UserDto } from 'src/domain/users/specifications/dtos/user.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiBody({ type: UserDto })
  @ApiOkResponse({ description: 'Usuário registrado com sucesso' })
  register(@Body() dto: UserDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  @ApiBody({ type: LoginDto })
  @ApiOkResponse({
    description: 'Login realizado. Token JWT retornado.',
    schema: {
      type: 'object',
      properties: {
        access_token: { type: 'string', example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' },
      },
    },
  })
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto.email, dto.password);
  }
}
