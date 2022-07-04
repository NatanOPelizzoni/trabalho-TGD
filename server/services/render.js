const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config({path: 'config.env'});
const URL_API = process.env.URL_API;

const autorService = require('../services/autorService');
const alunoService = require('../services/alunoService');
const livroService = require('../services/livroService');
const locacaoService = require('../services/locacaoService');

exports.index = function(req, res){
    res.render('index');
}

//Exports Autor

exports.autor = async function(req, res){
    var autores = await autorService.findAll();

    if(autores){
        res.render('autor', {autores: autores});
    }else{
        res.send('Autores está indefinido');
    }
}

exports.add_autor = function(req, res){
    res.render('add_autor');
}

exports.update_autor = function(req, res){
    res.render('update_autor');
}

//Exports Aluno

exports.aluno = async function(req, res){
    var alunos = await alunoService.findAll();

    if(alunos){
        res.render('aluno', {alunos: alunos});
    }else{
        res.send('Autores está indefinido');
    }
}

exports.add_aluno = function(req, res){
    res.render('add_aluno');
}

exports.update_aluno = function(req, res){
    res.render('update_aluno');
}

//Exports Livro

exports.livro = async function(req, res){
    var autores = await autorService.findAll();
    var livros = await livroService.findAll();

    if(livros && autores){
        res.render('livro', {livros: livros, autores: autores});
    }else{
        res.send('Autores ou Livros está indefinido');
    }
}

exports.add_livro = async function(req, res){
    var autores = await autorService.findAll();

    if(autores){
        res.render('add_livro', {autores: autores});
    }else{
        res.send('Autores está indefinido');
    }
}

exports.update_livro = function(req, res){
    res.render('update_livro');
}

//Exports Locação

exports.locacao = async function(req, res){
    var locacoes = await locacaoService.findAll();
    var alunos = await alunoService.findAll();
    var livros = await livroService.findAll();

    if(locacoes && alunos && livros){
        res.render('locacao', {locacoes: locacoes, alunos: alunos, livros: livros});
    }else{
        res.send('Locações ou Alunos ou Livros está indefinido');
    }
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