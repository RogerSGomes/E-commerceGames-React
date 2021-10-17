
const express = require('express');

const Product = require('../models/product');

const routes = express.Router();

routes.get('/', async (req, res) => {
    const product = await Product.find();
    return res.send(product);
});

routes.get('/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const product = await Product.findOne({ _id: _id });
        return res.send(product);
    } catch (err) {
        return res.status(400).send({ error: 'Produto não encontrado.' });
    }
});

routes.post('/register', async (req, res) => {
    const { titulo } = req.body;
    try {
        if (await Product.findOne({ titulo: titulo }))
            return res.status(400).send({ error: 'Produto já cadastrado.' });

        const product = await Product.create(req.body);

        return res.send(product);
    } catch (err) {
        return res.status(400).send({ error: err });
    }
});

routes.put('/update', async (req, res) => {
    const { _id } = req.body;

    try {
        if (!await Product.findOne({ _id: _id }))
            return res.status(404).send({ error: "Produto não encontrado para atualização de conteúdo." });

        const product = req.body;

        if (await Product.updateOne({ _id: _id }, {
            imagem: product.imagem,
            titulo: product.titulo,
            subtitulo: product.subtitulo,
            descricao: product.descricao,
            preco: product.preco,
            plataformas: product.plataformas
        })) {
            product = await Product.findOne({ _id: _id });
            return res.send(product);
        }

        return res.status(404).send({ error: "Não foi possível atualizar o produto." });
    } catch (err) {
        return res.status(400).send({ error: err });
    }
});

routes.delete('/delete', async (req, res) => {
    const { _id } = req.body;

    try {
        if (!await Product.findOne({ _id: _id }))
            return res.status(400).send({ error: 'Produto não encontrado.' });

        if (!await Product.deleteOne({ _id: _id }))
            return res.send({ error: "Não foi possível deletar o produto." });

        return res.send({ mensagem: "Produto deletado." });
    } catch (err) {
        return res.status(400).send({ error: err });
    }
});

module.exports = app => app.use('/product', routes);