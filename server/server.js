var express = require('express'),
    product = require('./routes/product');

var app = express();

app.get('/products/:id', product.findById);
app.get('/products', product.findAll);

app.listen(3000);
console.log('Listening on port 3000...');