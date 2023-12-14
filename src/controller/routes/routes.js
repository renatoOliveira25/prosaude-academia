import express from 'express';
import { Aluno } from '../../model/Aluno.js'

const router = express.Router();

router.get('/', (req, res) => {
    return res.json('Olá mundo!');
});

router.post('/cadastro-aluno', (req, res) => {
    const { nome, cpf, dataNascimento, telefone, endereco, email, altura, peso } = req.body;

    const novoAluno = new Aluno(nome, cpf, new Date(dataNascimento), telefone, endereco, email, altura, peso);
    
    console.log(novoAluno);
});

router.get('/consulta-aluno', (req, res) => {
    res.status(200).json({ "mensagem": "Lista de alunos... a implementar" });
})

export { router };