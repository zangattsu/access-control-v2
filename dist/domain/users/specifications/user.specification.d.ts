export interface IUserSpecification {
    emailUsuario?: string;
    nome?: string;
    password?: string;
}
export declare class UserSpecification {
    private spec;
    constructor(spec: IUserSpecification);
    private validate;
    getEmailUsuario(): string | undefined;
    getNome(): string | undefined;
    getPassword(): string | undefined;
    temFiltrosAtivos(): boolean;
}
