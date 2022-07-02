const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    }
});

const AutorDB = mongoose.model('autordb', schema);

module.exports = AutorDB;