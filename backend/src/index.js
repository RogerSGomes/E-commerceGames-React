const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/controllers/productController')(app);

app.listen(8000, () => {
    console.log('porta 8000 iniciada');
});