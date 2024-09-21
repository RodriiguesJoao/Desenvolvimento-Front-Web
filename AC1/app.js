const express = require('express');
const mysql = require('mysql2');
const app = express();
app.use(express.json()); 

// Configuração da conexão com MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // substitua com seu usuário
    password: 'Joao2411-', // substitua com sua senha
    database: 'rhAC1' // nome do banco de dados
});

// 2. a) Todos os cargos:
app.get('/cargos', (req, res) => {
    const query = 'SELECT * FROM cargo';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// 2. b) Todos os setores:
app.get('/setores', (req, res) => {
    const query = 'SELECT * FROM setor';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// 2. c) Todos os funcionários:
app.get('/funcionarios', (req, res) => {
    const query = 'SELECT * FROM funcionario';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// 2. d) Setor com o nome passando por querystring:
app.get('/setor', (req, res) => {
    const nome = req.query.nome;
    const query = 'SELECT * FROM setor WHERE nome = ?';
    db.query(query, [nome], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// 2. e) Funcionário com o parâmetro nome passado por :id
app.get('/funcionario/:id', (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM funcionario WHERE cod_funcionario = ?';
    db.query(query, [id], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// 2. f) Todos os funcionários do cargo passado como parâmetro no body da requisição:
app.get('/funcionarios/cargo', (req, res) => {
    const cargo = req.body.cargo;
    const query = 'SELECT * FROM funcionario WHERE cod_cargo = ?';
    db.query(query, [cargo], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// 2. g) Todos os cargos que não possuem funcionários
app.get('/cargos-sem-funcionarios', (req, res) => {
    const query = `
        SELECT c.* FROM cargo c
        LEFT JOIN funcionario f ON c.cod_cargo = f.cod_cargo
        WHERE f.cod_cargo IS NULL`;
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// 3. a) POST Funcionário:
app.post('/funcionario', (req, res) => {
    const { nome, data_admissao, cod_cargo, cod_setor } = req.body;
    const query = 'INSERT INTO funcionario (nome, data_admissao, cod_cargo, cod_setor) VALUES (?, ?, ?, ?)';
    db.query(query, [nome, data_admissao, cod_cargo, cod_setor], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Funcionário inserido com sucesso!', id: results.insertId });
    });
});

// 4. Requisição PUT para atualizar funcionário:
app.put('/funcionario/:id', (req, res) => {
    const id = req.params.id;
    const { nome, data_admissao, cod_cargo, cod_setor } = req.body;
    const query = 'UPDATE funcionario SET nome = ?, data_admissao = ?, cod_cargo = ?, cod_setor = ? WHERE cod_funcionario = ?';
    db.query(query, [nome, data_admissao, cod_cargo, cod_setor, id], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Funcionário atualizado com sucesso!' });
    });
});

// 5. Requisição DELETE para excluir funcionário:
app.delete('/funcionario/:id', (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM funcionario WHERE cod_funcionario = ?';
    db.query(query, [id], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Funcionário excluído com sucesso!' });
    });
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL!');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
