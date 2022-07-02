const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    alunoId:  {
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
        ref: 'alunodb'
    },
    livroId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
        ref: 'livrodb'
    },
    dataretirada: {
        type: Date,
        required: true
    }
});

const LocacaoDB = mongoose.model('locacaodb', schema);

module.exports = LocacaoDB;