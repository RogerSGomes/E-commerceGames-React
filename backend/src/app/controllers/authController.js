const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/user');

const routes = express.Router();

routes.post('/register', async (req, res) => {
    const { email } = req.body;

    try {
        if (await User.findOne({ email: email }))
            return res.status(400).send({ error: 'Usuário já cadastrado.' });

        const user = await User.create(req.body);

        user.senha = undefined;

        return res.send({
            user: user
        });

    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: err });
    }
});

routes.post('/authenticate', async (req, res) => {
    const { email, senha } = req.body;

    const user = await User.findOne({ email: email }).select('+senha');

    if (!user)
        return res.status(400).send({ error: 'Usuário não encontrado.' });

    if (!await bcrypt.compare(senha, user.senha))
        return res.status(400).send({ error: 'Senha incorreta.' });

    user.senha = undefined;

    res.send({
        user
    });
});

module.exports = app => app.use('/auth', routes);