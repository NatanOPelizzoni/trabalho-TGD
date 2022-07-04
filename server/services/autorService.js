var AutorDB = require('../model/autorModel');

exports.findAll = async () => {
    return await AutorDB.find()
}

exports.findById = async (id) => {
    return await AutorDB.findById(id)
}

exports.add = async (dados) => {
    return await AutorDB(dados).save();
}

exports.findByIdAndUpdate = async (id, dados) => {
    return await AutorDB.findByIdAndUpdate(id, dados, { useFindAndModify: false });
}

exports.findByIdAndDelete = async (id) => {
    return await AutorDB.findByIdAndDelete(id)
}