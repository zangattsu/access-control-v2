import { AuthService } from '../../application/services/auth.service';
import { LoginDto } from '../../domain/auth/dto/login.dto';
import { UserDto } from 'src/domain/users/specifications/dtos/user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: UserDto): Promise<{
        access_token: string;
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
    }>;
}
