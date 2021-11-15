import express from  'express'
import dotenv from  'dotenv'
import connectDB from './config/db.js'
import products from './data/products.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('Hello, it is working.')
})

app.get('/api/products', (req, res) => {
  //transfer it into json data type
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  //get the single product that matches the products/:id
  const product = products.find((product) => product._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
