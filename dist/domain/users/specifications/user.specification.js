"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSpecification = void 0;
class UserSpecification {
    constructor(spec) {
        this.spec = spec;
        this.validate();
    }
    validate() {
        if (this.spec.nome) {
            const nome = this.spec.nome;
            if (nome.length < 3) {
                throw new Error('Nome deve ter no mínimo 3 caracteres');
            }
        }
        if (this.spec.password && this.spec.password.length < 8) {
            throw new Error('Senha deve ter no mínimo 8 caracteres');
        }
        if (this.spec.emailUsuario) {
            const email = this.spec.emailUsuario;
            if (!email.includes('@')) {
                throw new Error('Email inválido');
            }
        }
    }
    getEmailUsuario() {
        return this.spec.emailUsuario;
    }
    getNome() {
        return this.spec.nome;
    }
    getPassword() {
        return this.spec.password;
    }
    temFiltrosAtivos() {
        return Object.values(this.spec).some(v => v !== undefined && v !== null);
    }
}
exports.UserSpecification = UserSpecification;
//# sourceMappingURL=user.specification.js.map