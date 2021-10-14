const mongoose = require('../../database');

const productSchema = new mongoose.Schema({
    titulo: {
        type: String,
        require: true
    },
    subtitulo: {
        type: String,
        require: false,
    },
    descricao: {
        type: String,
        require: true
    },
    preco: {
        type: String,
        require: true
    },
    plataformas: {
        xbox: { type: Boolean, require: false, default: false },
        ps: { type: Boolean, require: false, default: false },
        pc: { type: Boolean, require: false, default: false },
        android: { type: Boolean, require: false, default: false },
        switch: { type: Boolean, require: false, default: false }
    }
});

const product = mongoose.model('tb02_produto', productSchema);

module.exports = product;