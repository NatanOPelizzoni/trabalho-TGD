var AutorDB = require('../model/autorModel');

exports.findAll = async () => {
    return await AutorDB.find()
}

exports.findById = async (id) => {
    return await AutorDB.findById(id)
}