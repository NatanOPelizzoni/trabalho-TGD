var LivroDB = require('../model/livroModel');

exports.findAll = async () => {
    return await LivroDB.find()
}

exports.findById = async (id) => {
    return await LivroDB.findById(id)
}