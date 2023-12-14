export class Treino {
    constructor(id, idAluno, idProfessor, idAparelho, exercicio, regiaoCorpo) {
        this.id = id;
        this.idAluno = idAluno;
        this.idProfessor = idProfessor;
        this.idAparelho = idAparelho || [];
        this.exercicios = exercicio || [];
        this.regiaoCorpo = regiaoCorpo || [];
    }

    adicionarAparelho(idAparelho) {
        this.idAparelho.push(idAparelho);
    }

    adicionarExercicio(exercicio) {
        this.exercicios.push(exercicio);
    }

    adicionarRegiaoCorpo(regiao) {
        this.regiaoCorpo.push(regiao);
    }
}