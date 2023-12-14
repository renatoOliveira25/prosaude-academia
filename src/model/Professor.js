import { Pessoa } from "./Pessoa.js";

export class Professor extends Pessoa {
    constructor(id, nome, cpf, dataNascimento, telefone, endereco, email, dataContratacao, formacao, especialidade) {
        super(id, nome, cpf, dataNascimento, telefone, endereco, email);
        this.dataContratacao = dataContratacao;
        this.formacao = formacao;
        this.especialidade = especialidade;
    }

    // Getters
    getDataContratacao() {
        return this.dataContratacao;
    }

    getFormacao() {
        return this.formacao;
    }

    getEspecialidade() {
        return this.especialidade;
    }

    // Setters
    setDataContratacao(dataContratacao) {
        this.dataContratacao = dataContratacao;
    }

    setFormacao(formacao) {
        this.formacao = formacao;
    }

    setEspecialidade(especialidade) {
        this.especialidade = especialidade;
    }
}