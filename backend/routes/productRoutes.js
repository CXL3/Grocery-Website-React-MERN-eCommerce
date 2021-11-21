import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const router = express.Router()

// We could use try catch for the errors,
//but I am going to use express-async-handler

// @desc Fetch all products
// @route GET /api/products
// @access Just me
router.get(
  '/',
  asyncHandler(async (req, res) => {
    // pass all products in, mongoose will return a promise,
    // so we use async await again.
    const products = await Product.find({})

    //transfer it into json data type
    res.json(products)
  })
)
// @desc Fetch single product
// @route GET /api/products/:id
// @access Just me
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    //get the single product that matches the products/:id
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  })
)

export default router
