var LocacaoDB = require('../model/locacaoModel');

exports.findAll = async () => {
    return await LocacaoDB.find()
}

exports.findById = async (id) => {
    return await LocacaoDB.findById(id)
}

exports.add = async (dados) => {
    await new LocacaoDB(dados).save();
}

exports.findByIdAndUpdate = async (id, dados) => {
    await new LocacaoDB.findByIdAndUpdate(id, dados, { useFindAndModify: false });
}

exports.findByIdAndDelete = async (id) => {
    await new LocacaoDB.findByIdAndDelete(id)
}