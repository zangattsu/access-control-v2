/**
 * RESPONSABILIDADE: Definir critérios de busca de forma agnóstica
 * Sem conhecimento de Prisma, banco de dados ou HTTP
 */

export interface IUserSpecification {
  emailUsuario?: string;
  nome?: string;
  password?: string;
}

export class UserSpecification {
  constructor(private spec: IUserSpecification) {
    this.validate();
  }

  private validate(): void {
    // Validações de negócio puro (sem Prisma)
    if (this.spec.nome) {
      const nome = this.spec.nome;
      if (nome.length < 3) {
        throw new Error('Nome deve ter no mínimo 3 caracteres');
      }
    }

    if (this.spec.password && this.spec.password.length < 8) {
      throw new Error('Senha deve ter no mínimo 8 caracteres'); 
    }

    // Se está logado, deve ter CNPJ
    if (this.spec.emailUsuario) {
      const email = this.spec.emailUsuario;
      if (!email.includes('@')) {
        throw new Error('Email inválido');
      }
    }
  }

  // Getters para acesso seguro
  getEmailUsuario(): string | undefined {
    return this.spec.emailUsuario;
  }

  getNome(): string | undefined {
    return this.spec.nome;
  }

  getPassword(): string | undefined {
    return this.spec.password;
  }

  // Método para verificar se há filtros ativos
  temFiltrosAtivos(): boolean {
    return Object.values(this.spec).some(v => v !== undefined && v !== null);
  }
}