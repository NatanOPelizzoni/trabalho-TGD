const { ObjectId } = require('mongodb')
const { livro } = require('../services/render');

const livroService = require('../services/livroService');

//Cria e salva um novo livro
exports.create = (req, res) => {
    //valida requisição
    if(!req.body){
        res.status(400).send({
            message: "Conteudo não pode ser vazio!"
        });
        return;
    }

    //Cria objeto com os dados
    const dados = {
        titulo: req.body.titulo,
        paginas: req.body.paginas,
        genero: req.body.genero,
        autorId: new ObjectId(req.body.autorId)
    };

    //Salva no banco
    livroService.add(dados)
    .then(data => {
        res.redirect('/add_livro');
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Algum erro aconteceu enquanto criava a operação de criar"
        });
    })
}

//Busca e retorna todos os livros / Busca e retorna um único livro
exports.find = (req, res) => {
    if(req.query.id){
        const id = req.query.id;

        livroService.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({
                    message: `Não foi encontrado o livro com o id ${id}`
                });
            }else{
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Um erro ocorreu enquanto tentava pegar as informações do livro pelo id ${id}`
            });
        });
    }else{
        livroService.findAll()
        .then(livro => {
            res.send(livro);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Um erro ocorreu enquanto tentava pegar as informações do livro"
            });
        })
    }
}

//Atualizar livro pelo id
exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({
            message: "Infomações para atualizar não podem estarem vazias"
        });
    }

    //Cria objeto com os dados
    const dados = {
        titulo: req.body.titulo,
        paginas: req.body.paginas,
        genero: req.body.genero,
        autorId: new ObjectId(req.body.autorId)
    };

    const id = req.params.id;
    livroService.findByIdAndUpdate(id, dados)
    .then(data => {
        if(!data){
            res.status(404).send({
                message: `Não foi possível atualizar o livro com o id ${id}, talvez o livro não foi encontrado`
            });
        }else{
            res.send(data);
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Erro ao atualizar livro"
        });
    });
}

//Deletar livro pelo id
exports.delete = (req, res) => {
    const id = req.params.id;

    livroService.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({
                message: `Não foi possível deletar o livro pelo id ${id}, talvez o id esteje errado`
            });
        }else{
            res.send({
                message: "livro deletado com sucesso!"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Não foi possível deletear o livro pelo id ${id}`
        });
    });
}