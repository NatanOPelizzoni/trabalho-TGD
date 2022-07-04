const { locacao } = require('../services/render');
const { ObjectId } = require('mongodb')

const locacaoService = require('../services/locacaoService');

//Cria e salva uma nova locação
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
        alunoId: new ObjectId(req.body.alunoId),
        livroId: new ObjectId(req.body.livroId),
        dataretirada: req.body.dataretirada
    };

    //salva locação no banco de dados
    locacaoService.add(dados)
    .then(data => {
        res.redirect('/add_locacao');
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Algum erro aconteceu enquanto criava a operação de criar"
        });
    })
}

//Busca e retorna todas as locações / Busca e retorna uma única locação
exports.find = (req, res) => {
    if(req.query.id){
        const id = req.query.id;

        locacaoService.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({
                    message: `Não foi encontrado a locação com o id ${id}`
                });
            }else{
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Um erro ocorreu enquanto tentava pegar as informações da locação pelo id ${id}`
            });
        });
    }else{
        locacaoService.findAll()
        .then(locacao => {
            res.send(locacao);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Um erro ocorreu enquanto tentava pegar as informações da locação"
            });
        })
    }
}

//Atualizar locação pelo id
exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({
            message: "Infomações para atualizar não podem estarem vazias"
        });
    }

    const id = req.params.id;

    //Cria objeto com os dados
    const dados = {
        alunoId: new ObjectId(req.body.alunoId),
        livroId: new ObjectId(req.body.livroId),
        dataretirada: req.body.dataretirada
    };

    locacaoService.findByIdAndUpdate(id, dados)
    .then(data => {
        if(!data){
            res.status(404).send({
                message: `Não foi possível atualizar a locação com o id ${id}, talvez a locação não foi encontrada`
            });
        }else{
            res.send(data);
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Erro ao atualizar locação"
        });
    });
}

//Deletar locação pelo id
exports.delete = (req, res) => {
    const id = req.params.id;

    locacaoService.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({
                message: `Não foi possível deletar a locação pelo id ${id}, talvez o id esteje errado`
            });
        }else{
            res.send({
                message: "locação deletada com sucesso!"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Não foi possível deletear a locação pelo id ${id}`
        });
    });
}