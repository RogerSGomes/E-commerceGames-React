const mongoose = require('../../database');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    usuario: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true
    },
    senha: {
        type: String,
        require: true,
        select: false
    },
    criadoEm: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;

    next();
});

const user = mongoose.model('tb01_usuario', userSchema);

module.exports = user;