var LivroDB = require('../model/livroModel');

exports.findAll = async () => {
    return await LivroDB.find()
}

exports.findById = async (id) => {
    return await LivroDB.findById(id)
}

exports.add = async (dados) => {
    return await LivroDB(dados).save();
}

exports.findByIdAndUpdate = async (id, dados) => {
    return await LivroDB.findByIdAndUpdate(id, dados, { useFindAndModify: false });
}

exports.findByIdAndDelete = async (id) => {
    return await LivroDB.findByIdAndDelete(id)
}