const { ObjectId } = require('mongodb')
var LivroDB = require('../model/livroModel');
const { livro } = require('../services/render');

//Cria e salva um novo livro
exports.create = (req, res) => {
    //valida requisição
    if(!req.body){
        res.status(400).send({
            message: "Conteudo não pode ser vazio!"
        });
        return;
    }

    //novo livro
    const livro = new LivroDB({
        titulo: req.body.titulo,
        paginas: req.body.paginas,
        genero: req.body.genero,
        autorId: new ObjectId(req.body.autorId)
    });

    console.log(livro);

    //salva livro no banco de dados
    livro
    .save(livro)
    .then(data => {
        // res.send(data);
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

        LivroDB.findById(id)
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
        LivroDB.find()
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

    const id = req.params.id;
    LivroDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

    LivroDB.findByIdAndDelete(id)
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