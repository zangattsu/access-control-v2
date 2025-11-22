import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { UserDto } from 'src/domain/users/specifications/dtos/user.dto';

/**
 * RESPONSABILIDADE: Implementar persistência com Prisma
 * - Converter Specification em Prisma WhereInput
 * - Executar queries
 * - Mapear resultados para DTOs
 */
@Injectable()
export class UserRepository {
    constructor(private readonly prisma: PrismaService) { }

    async findByEmail(email: string) {
        return this.prisma.user.findUnique({ where: { email } });
    }

    async create(data: UserDto) {
        return this.prisma.user.create({
            data: {
                email: data.email,
                name: data.name,
                passwordHash: data.password,
            },
        });
    }
}
