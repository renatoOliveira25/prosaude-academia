CREATE TABLE alunos (
    id serial PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(11),
    data_nascimento DATE,
    telefone VARCHAR(11),
    endereco VARCHAR(255),
    email VARCHAR(100),
    altura INT,
    peso INT,
    imc INT
);

CREATE TABLE professores (
    id serial PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(11),
    data_nascimento DATE,
    telefone VARCHAR(11),
    endereco VARCHAR(255),
    email VARCHAR(100),
    data_contratacao DATE,
    formacao VARCHAR(50),
    especialidade VARCHAR(50)
);


INSERT INTO alunos (nome, cpf, data_nascimento, telefone, endereco, email, altura, peso, imc) VALUES
    ('Diogo Martin Isaac Farias', '65680749181', '2002-2-22', '38988727840', 'Praça Vicente Mota, 976', 'diogo22@mail.com', 192, 97, (97 / (192 * 192))),
    ('Heloise Lara Bárbara da Rocha', '40087701359', '1957-6-13', '86994039916', 'Rua José Mentor, 158', 'helo.rocha@ymail.com', 164, 76, (76 / (164 * 164))),
    ('Benício Ian Barros', '90339671890', '2000-7-26', '53994591549', 'Rua Visconde do Rio Branco, 532', 'benicio-ian-barros00@mail.com', 176, 83, (83 / (176 * 176)));

INSERT INTO professores (nome, cpf, data_nascimento, telefone, endereco, email, data_contratacao, formacao, especialidade) VALUES
    ('Sara Emilly Assis', '69987294138', '1971-12-08', '63994908708', 'Quadra 605 Sul Alameda 4', 'sara-assis99@deze7.com.br', '2019-1-21', 'Educação Física', 'Cross Fit'),
    ('Kaique Raul Almada', '27616735142', '1987-11-13', '68986699417', 'Estrada do Calafate, 685', 'kaique.raul.almada@academiahct.com.br', '2021-12-1', 'Massagista', 'Fisioterapia'),
    ('Luan Mário Manuel Oliveira', '59968556238', '1998-1-18', '86995324042', 'Avenida Raul Lopes, 705', 'luan-oliveira71@lht.com.br', '2023-2-28', 'Educação Física', 'Musculação');