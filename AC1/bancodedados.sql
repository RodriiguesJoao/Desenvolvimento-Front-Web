-- Criando o banco de dados e tabelas
create DATABASE rhAC1;
USE rhAC1;

CREATE TABLE cargo
(
    cod_cargo INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(300) NOT NULL,
    salario DECIMAL(15,2) NOT NULL
);

CREATE TABLE setor
(
    cod_setor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    ramal VARCHAR(10) NULL
);

CREATE TABLE funcionario
(
    cod_funcionario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(500) NOT NULL,
    data_admissao DATE,
    cod_cargo INT NOT NULL,
    cod_setor INT NOT NULL,
    FOREIGN KEY (cod_cargo) REFERENCES cargo (cod_cargo),
    FOREIGN KEY (cod_setor) REFERENCES setor (cod_setor)
);

-- Inserindo dados na tabela 'cargo' com especificação de colunas
INSERT INTO cargo (nome, salario) VALUES
('Desenvolvedor Web Frontend Junior', 2500),
('Desenvolvedor Backend Junior', 2630),
('Desenvolvedor Frontend Pleno', 5900),
('Desenvolvedor Frontend Senior', 9320),
('Analista de Suporte', 5100),
('Analista de Sistemas', 7630),
('Gestor de TI', 12300),
('Gerente de Projetos', 15000), 
('Contador', 8500.00),
('Analista Financeiro', 7500.00),
('Assistente Financeiro', 4500.00),
('Gerente de Recursos Humanos', 9500.00),
('Analista de Recursos Humanos', 7000.00),
('Assistente de Recursos Humanos', 4000.00),
('Coordenador de Atendimento', 8000.00),
('Atendente', 3500.00),
('Supervisor de Atendimento', 6000.00);

-- Inserindo dados na tabela 'setor'
INSERT INTO setor (nome, ramal) VALUES
('Desenvolvimento de Software', '1010'),
('Redes e Infraestrutura', '1020'),
('Recursos Humanos', '1030'),
('Financeiro', '1040'),
('Suporte Técnico', '1050'),
('Atendimento', '1060'); 

-- Inserindo dados na tabela 'funcionario'
INSERT INTO funcionario (nome, data_admissao, cod_cargo, cod_setor) VALUES
('João da Silva', '2021-05-10', 1, 1), 
('Maria Oliveira', '2022-02-15', 2, 1),
('Pedro Souza', '2020-11-22', 3, 2),
('Lucas Almeida', '2019-08-25', 5, 2),
('Camila Martins', '2021-06-20', 8, 3),  -- Gerente de Projetos no setor de Recursos Humanos
('Fernanda Souza', '2020-09-12', 6, 3),  -- Analista de Sistemas no setor de Recursos Humanos
('Rafael Lima', '2022-03-10', 1, 4),     -- Desenvolvedor Front-End no setor Financeiro
('Daniela Costa', '2019-11-05', 5, 4),   -- Analista de Suporte no setor Financeiro
('Leonardo Braga', '2021-08-18', 2, 6);  -- Desenvolvedor Backend no setor de Atendimento
