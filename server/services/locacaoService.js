var LocacaoDB = require('../model/locacaoModel');

exports.findAll = async () => {
    return await LocacaoDB.find()
}

exports.findById = async (id) => {
    return await LocacaoDB.findById(id)
}

exports.add = async (dados) => {
    return await LocacaoDB(dados).save();
}

exports.findByIdAndUpdate = async (id, dados) => {
    return await LocacaoDB.findByIdAndUpdate(id, dados, { useFindAndModify: false });
}

exports.findByIdAndDelete = async (id) => {
    return await LocacaoDB.findByIdAndDelete(id)
}