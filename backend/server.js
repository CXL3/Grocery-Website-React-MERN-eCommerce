const express = require('express');
const products = require('./data/products')

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, it is working.');
})

app.get('/api/products', (req, res) => {
    //transfer it into json data type
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    //get the single product that matches the products/:id
    const product = products.find(product => product._id === req.params.id)
    res.json(product)
})

app.listen(5000, console.log('Server listening on port 5000'));
