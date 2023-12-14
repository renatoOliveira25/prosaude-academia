export class Pessoa {
    constructor(nome, cpf, dataNascimento, telefone, endereco, email) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.telefone = telefone;
        this.endereco = endereco;
        this.email = email;
    }

    // Getters
    getId() {
        return this.id;
    }

    getNome() {
        return this.nome;
    }

    getCpf() {
        return this.cpf;
    }

    getDataNascimento() {
        return this.dataNascimento;
    }

    getTelefone() {
        return this.telefone;
    }

    getEndereco() {
        return this.endereco;
    }

    getEmail() {
        return this.email;
    }

    // Setters
    setId(id) {
        this.id = id;
    }

    setNome(nome) {
        this.nome = nome;
    }

    setCpf(cpf) {
        this.cpf = cpf;
    }

    setDataNascimento(dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    setTelefone(telefone) {
        this.telefone = telefone;
    }

    setEndereco(endereco) {
        this.endereco = endereco;
    }

    setEmail(email) {
        this.email = email;
    }
}