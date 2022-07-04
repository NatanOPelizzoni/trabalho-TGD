var AutorDB = require('../model/autorModel');

exports.findAll = async () => {
    return await AutorDB.find()
}

exports.findById = async (id) => {
    return await AutorDB.findById(id)
}

exports.add = async (dados) => {
    await new AutorDB(dados).save();
}

exports.findByIdAndUpdate = async (id, dados) => {
    await new AutorDB.findByIdAndUpdate(id, dados, { useFindAndModify: false });
}

exports.findByIdAndDelete = async (id) => {
    await new AutorDB.findByIdAndDelete(id)
}