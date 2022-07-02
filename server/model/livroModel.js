const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    paginas: Number,
    genero: String,
    autorId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'autordb'
    }
});

const LivroDB = mongoose.model('livrodb', schema);

module.exports = LivroDB;
