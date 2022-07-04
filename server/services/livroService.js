var LivroDB = require('../model/livroModel');

exports.findAll = async () => {
    return await LivroDB.find()
}

exports.findById = async (id) => {
    return await LivroDB.findById(id)
}

exports.add = async (dados) => {
    await new LivroDB(dados).save();
}

exports.findByIdAndUpdate = async (id, dados) => {
    await new LivroDB.findByIdAndUpdate(id, dados, { useFindAndModify: false });
}

exports.findByIdAndDelete = async (id) => {
    await new LivroDB.findByIdAndDelete(id)
}