class Aparelho {
    constructor(id, nome, musculoAtivado) {
        this.id = id;
        this.nome = nome;
        this.musculoAtivado = musculoAtivado;
    }

    // Getters
    getId() { return this.id; }
    getNome() { return this.nome; }
    getMusculoAtivado() { return this.musculoAtivado; }

    // Setters
    setId(id) { this.id = id; }
    setNome(nome) { this.nome = nome; }
    setMusculoAtivado(musculoAtivado) { this.musculoAtivado = musculoAtivado; }
}