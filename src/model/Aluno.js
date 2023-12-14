import { Pessoa } from "./Pessoa";

class Aluno extends Pessoa {
    constructor(id, nome, cpf, dataNascimento, telefone, endereco, email, altura, peso, imc) {
        super(id, nome, cpf, dataNascimento, telefone, endereco, email);
        this.altura = altura;
        this.peso = peso;
        this.imc = imc;
    }

    get altura() {
        return this._altura;
    }

    set altura(altura) {
        this._altura = altura;
        this._imc = this.calcularImc();
    }

    get peso() {
        return this._peso;
    }

    set peso(peso) {
        this._peso = peso;
        this._imc = this.calcularImc();
    }

    get imc() {
        return this._imc;
    }

    calcularImc() {
        return this._peso / (this._altura ** 2);
    }
}