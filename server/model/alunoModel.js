const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    matricula: {
        type: Number,
        required: true,
        unique: true
    }
});

const AlunoDB = mongoose.model('alunodb', schema);

module.exports = AlunoDB;