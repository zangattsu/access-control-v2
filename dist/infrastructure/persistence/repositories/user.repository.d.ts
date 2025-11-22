import { PrismaService } from 'src/common/prisma/prisma.service';
import { UserDto } from 'src/domain/users/specifications/dtos/user.dto';
export declare class UserRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<{
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
