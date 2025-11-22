import { UserDto } from 'src/domain/users/specifications/dtos/user.dto';
import { UserRepository } from 'src/infrastructure/persistence/repositories/user.repository';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    getByEmail(email: string): Promise<{
        name: string;
        id: number;
        email: string;
        passwordHash: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    create(data: UserDto): Promise<{
        name: string;
        id: number;
        email: string;
        passwordHash: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
