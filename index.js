const express = require('express');
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

const app = express();

const port = 5050

app.use(express.json());

app.get('/api/products:id', getProduct);
app.get('/api/products', getProducts);



app.listen(5050, () =>console.log('5050 is listening'));