var AlunoDB = require('../model/alunoModel');
const { aluno } = require('../services/render');

//Cria e salva um novo aluno
exports.create = (req, res) => {
    //valida requisição
    if(!req.body){
        res.status(400).send({
            message: "Conteudo não pode ser vazio!"
        });
        return;
    }

    //novo aluno
    const aluno = new AlunoDB({
        nome: req.body.nome,
        matricula: req.body.matricula
    });

    //salva aluno no banco de dados
    aluno
    .save(aluno)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Algum erro aconteceu enquanto criava a operação de criar"
        });
    })
}

//Busca e retorna todos os alunos / Busca e retorna um único aluno
exports.find = (req, res) => {
    if(req.query.id){
        const id = req.query.id;

        AlunoDB.findById(id)
            .then(data => {
                if(!data){
                    res.status(404).send({
                        message: `Não foi encontrado o aluno com o id ${id}`
                    });
                }else{
                    res.send(data);
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: `Um erro ocorreu enquanto tentava pegar as informações do aluno pelo id ${id}`
                });
            });
    }else{
        AlunoDB.find()
        .then(aluno => {
            res.send(aluno);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Um erro ocorreu enquanto tentava pegar as informações do aluno"
            });
        })
    }
}

//Atualizar aluno pelo id
exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({
            message: "Infomações para atualizar não podem estarem vazias"
        });
    }

    const id = req.params.id;
    AlunoDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
        if(!data){
            res.status(404).send({
                message: `Não foi possível atualizar o aluno com o id ${id}, talvez o aluno não foi encontrado`
            });
        }else{
            res.send(data);
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Erro ao atualizar aluno"
        });
    });
}

//Deletar aluno pelo id
exports.delete = (req, res) => {
    const id = req.params.id;

    AlunoDB.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({
                message: `Não foi possível deletar o aluno pelo id ${id}, talvez o id esteje errado`
            });
        }else{
            res.send({
                message: "aluno deletado com sucesso!"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Não foi possível deletear o aluno pelo id ${id}`
        });
    });
}