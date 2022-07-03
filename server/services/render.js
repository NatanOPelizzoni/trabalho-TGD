const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config({path: 'config.env'});
const URL_API = process.env.URL_API;

exports.index = function(req, res){
    console.log(URL_API+'/autor');
    res.render('index');
}

//Exports Autor

exports.autor = function(req, res){
    //Fazendo uma requisicao GET para /api/autor
    axios.get(URL_API+'/autor')
    .then(function(response){
        // console.log(response.config.method);
        console.log(response.data);
        res.render('autor', {autores: response.data});
    }).catch((err) => {
        res.send(err);
    });
}

exports.add_autor = function(req, res){
    res.render('add_autor');
}

exports.update_autor = function(req, res){
    res.render('update_autor');
}

//Exports Aluno

exports.aluno = function(req, res){
    //Fazendo uma requisicao GET para /api/aluno
    axios.get(URL_API+'/aluno')
    .then(function(response){
        console.log(response.data);
        res.render('aluno', {alunos: response.data});
    }).catch((err) => {
        res.send(err);
    });
}

exports.add_aluno = function(req, res){
    res.render('add_aluno');
}

exports.update_aluno = function(req, res){
    res.render('update_aluno');
}

//Exports Livro

exports.livro = function(req, res){
    //Fazendo uma requisicao GET para /api/livro
    var autores = [];
    axios.get(URL_API+'/autor').then(function(response){
        autores = response.data;
    });
    axios.get(URL_API+'/livro')
    .then(function(response){
        console.log(response.data);
        res.render('livro', {livros: response.data, autores: autores});
    }).catch((err) => {
        res.send(err);
    });
}

exports.add_livro = function(req, res){
    axios.get(URL_API+'/autor')
    .then(function(response){
        res.render('add_livro', {autores: response.data});
    }).catch((err) => {
        res.send(err);
    });
}

exports.update_livro = function(req, res){
    res.render('update_livro');
}

//Exports Locação

exports.locacao = function(req, res){
    //Fazendo uma requisicao GET para /api/locacao
    var alunos = [];
    var livros = [];

    axios.get(URL_API+'/aluno').then(function(response){
        alunos = response.data;
    });

    axios.get(URL_API+'/livro').then(function(response){
        livros = response.data;
    });

    axios.get(URL_API+'/locacao')
    .then(function(response){
        console.log(response.data);
        res.render('locacao', {locacoes: response.data, alunos: alunos, livros: livros});
    }).catch((err) => {
        res.send(err);
    });
}

exports.add_locacao = function(req, res){
    var alunos = [];
    axios.get(URL_API+'/aluno').then(function(response){
        alunos = response.data;
    });
    axios.get(URL_API+'/livro')
    .then(function(response){
        res.render('add_locacao', {alunos: alunos, livros: response.data});
    }).catch((err) => {
        res.send(err);
    });
}

exports.update_locacao = function(req, res){
    res.render('update_locacao');
}