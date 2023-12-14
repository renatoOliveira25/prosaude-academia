import { Pessoa } from "./Pessoa.js";

export class Aluno extends Pessoa {
    constructor(nome, cpf, dataNascimento, telefone, endereco, email, altura, peso) {
        super(nome, cpf, dataNascimento, telefone, endereco, email);
        this.altura = altura;
        this.peso = peso;
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
        const alturaEmMetros = this.altura / 100; // Convertendo altura para metros
        return this.peso / (alturaEmMetros * alturaEmMetros);
    }
}