var AlunoDB = require('../model/alunoModel');

exports.findAll = async () => {
    return await AlunoDB.find()
}

exports.findById = async (id) => {
    return await AlunoDB.findById(id)
}

exports.add = async (dados) => {
    return await AlunoDB(dados).save();
}

exports.findByIdAndUpdate = async (id, dados) => {
    return await AlunoDB.findByIdAndUpdate(id, dados, { useFindAndModify: false });
}

exports.findByIdAndDelete = async (id) => {
    return await AlunoDB.findByIdAndDelete(id)
}