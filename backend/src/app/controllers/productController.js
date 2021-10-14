
const express = require('express');

const Product = require('../models/product');

const routes = express.Router();

routes.get('/', async (req, res) => {
    const product = await Product.find();
    return res.send(product);
});

routes.post('/register', async (req, res) => {
    const { titulo } = req.body;

    try {
        if (await Product.findOne({ titulo: titulo }))
            return res.status(400).send({ error: 'Produto já cadastrado.' });

        const product = await Product.create(req.body);

        return res.send({ product: product });
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: err });
    }
});

module.exports = app => app.use('/product', routes);