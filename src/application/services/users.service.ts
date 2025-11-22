import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';
import { UserDto } from 'src/domain/users/specifications/dtos/user.dto';
import { UserRepository } from 'src/infrastructure/persistence/repositories/user.repository';

/**
 * RESPONSABILIDADE: Orquestrar casos de uso
 * - Validar entrada
 * - Aplicar regras de negócio
 * - Chamar repository
 * - Retornar resultado
 */

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  /**
   * Caso de uso: Encontrar usuário por email
   */
  async getByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }

  /**
   * Caso de uso: Criar usuário
   */
  async create(data: UserDto) {
    const hash = await argon2.hash(data.password);
    return this.userRepository.create({
      email: data.email,
      name: data.name,
      password: hash,
    });
  }
}