import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/domain/users/specifications/dtos/user.dto';
import { UsersService } from './users.service';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(dto: UserDto): Promise<{
        access_token: string;
    }>;
    login(email: string, password: string): Promise<{
        access_token: string;
    }>;
    private signUser;
}
