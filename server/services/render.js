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

exports.update_autor = async function(req, res){
    const id = req.query.id;
    var autor = await autorService.findById(id)

    if(autor){
        res.render('update_autor', {id: id, autor: autor});
    }else{
        res.send('Autor está indefinido');
    }
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

exports.update_aluno = async function(req, res){
    const id = req.query.id;
    var aluno = await alunoService.findById(id)

    if(aluno){
        res.render('update_aluno', {id: id, aluno: aluno});
    }else{
        res.send('Aluno está indefinido');
    }
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

exports.update_livro = async function(req, res){
    const id = req.query.id;
    var autores = await autorService.findAll();
    var livro = await livroService.findById(id)

    if(livro && autores){
        res.render('update_livro', {id: id, livro: livro, autores: autores});
    }else{
        res.send('Autores ou Livro está indefinido');
    }
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

exports.add_locacao = async function(req, res){
    var locacoes = await locacaoService.findAll();
    var alunos = await alunoService.findAll();
    var livros = await livroService.findAll();

    if(locacoes && alunos && livros){
        res.render('add_locacao', {locacoes: locacoes, alunos: alunos, livros: livros});
    }else{
        res.send('Locações ou Alunos ou Livros está indefinido');
    }
}

exports.update_locacao = async function(req, res){
    const id = req.query.id;
    var alunos = await alunoService.findAll();
    var livros = await livroService.findAll();
    var locacao = await locacaoService.findById(id)

    if(locacao && alunos && livros){
        res.render('update_locacao', {id: id, locacao: locacao, alunos: alunos, livros: livros});
    }else{
        res.send('Locação ou Alunos ou Livros está indefinido');
    }
}