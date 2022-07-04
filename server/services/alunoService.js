var AlunoDB = require('../model/alunoModel');

exports.findAll = async () => {
    return await AlunoDB.find()
}

exports.findById = async (id) => {
    return await AlunoDB.findById(id)
}

exports.add = async (dados) => {
    await new AlunoDB(dados).save();
}

exports.findByIdAndUpdate = async (id, dados) => {
    await new AlunoDB.findByIdAndUpdate(id, dados, { useFindAndModify: false });
}

exports.findByIdAndDelete = async (id) => {
    await new AlunoDB.findByIdAndDelete(id)
}