const { response } = require('express');
const express = require('express');
const getProducts = require('./getProducts')

const app = express();

const port = 5050

app.use(express.json());

app.get('/api/products', getProducts);

app.get('/api/products:id', getProducts);

app.listen(5050, () =>console.log('5050 is listening'));