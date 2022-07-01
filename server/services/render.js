
exports.index = function(req, res){
    res.render('index');
}

//Exports Autor

exports.autor = function(req, res){
    res.render('autor');
}

exports.add_autor = function(req, res){
    res.render('add_autor');
}

exports.update_autor = function(req, res){
    res.render('update_autor');
}

//Exports Aluno

exports.aluno = function(req, res){
    res.render('aluno');
}

exports.add_aluno = function(req, res){
    res.render('add_aluno');
}

exports.update_aluno = function(req, res){
    res.render('update_aluno');
}

//Exports Livro

exports.livro = function(req, res){
    res.render('livro');
}

exports.add_livro = function(req, res){
    res.render('add_livro');
}

exports.update_livro = function(req, res){
    res.render('update_livro');
}

//Exports Locação

exports.locacao = function(req, res){
    res.render('locacao');
}

exports.add_locacao = function(req, res){
    res.render('add_locacao');
}

exports.update_locacao = function(req, res){
    res.render('update_locacao');
}