const { autor } = require('../services/render');
const autorService = require('../services/autorService');

//Cria e salva um novo autor
exports.create = (req, res) => {
    //valida requisição
    if(!req.body){
        res.status(400).send({
            message: "Conteúdo não pode ser vazio!"
        });
        return;
    }

    //Cria objeto com os dados
    const dados = {
        nome: req.body.nome
    };

    //Salva no banco
    autorService.add(dados)
    .then(data => {
        res.redirect('/add_autor');
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Algum erro aconteceu na tentiva de salvar no banco!"
        });
    })
}

//Busca e retorna todos os autores / Busca e retorna um único autor
exports.find = (req, res) => {
    if(req.query.id){
        const id = req.query.id;

        autorService.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({
                    message: `Não foi encontrado o autor com o id ${id}`
                });
            }else{
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Um erro ocorreu enquanto tentava pegar as informações do autor pelo id ${id}`
            });
        });
    }else{
        autorService.findAll()
        .then(autor => {
            res.send(autor);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Um erro ocorreu enquanto tentava pegar as informações do autor"
            });
        })
    }
}

//Atualizar autor pelo id
exports.update = async (req, res) => {
    if(!req.body){
        return res.status(400).send({
            message: "Infomações para atualizar não podem estarem vazias"
        });
    }

    const id = req.params.id;
    await autorService.findByIdAndUpdate(id, req.body)
    .then(data => {
        if(!data){
            res.status(404).send({
                message: `Não foi possível atualizar o autor com o id ${id}, talvez o autor não foi encontrado`
            });
        }else{
            res.send(data);
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Erro ao atualizar autor"
        });
    });
}

//Deletar autor pelo id
exports.delete = (req, res) => {
    const id = req.params.id;

    autorService.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({
                message: `Não foi possível deletar o autor pelo id ${id}, talvez o id esteje errado`
            });
        }else{
            res.send({
                message: "Autor deletado com sucesso!"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Não foi possível deletear o autor pelo id ${id}`
        });
    });
}