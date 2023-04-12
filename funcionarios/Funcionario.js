export class Funcionario {
    constructor(nome, _salario, _cpf) {
        this._nome = nome;
        this._salario = _salario;
        this._cpf = _cpf;

        this._bonificacao = 1;
        this._senha;
    }
    
    get senha(){
        return this._senha;
    }

    cadastrarSenha(_senha) {
        this._senha = _senha;
    }

}
