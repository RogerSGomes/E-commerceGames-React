const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bd_ecommerce_games', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))
mongoose.Promise = global.Promise;

module.exports = mongoose;