import express from 'express'
import dotenv from 'dotenv'

import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

//mount productRoutes
app.use('/api/products', productRoutes)

app.use((req, res, next) =>{
  const error = new Error (`not found - ${req.originalUrl}`)
  res.status(404)
  next (error)

})

//error middleware
app.use((err, req, res, next) => {
  // 200 then return 500 ( server error), otherwise return the status code
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  // set the status to statusCode
  res.status(statusCode)
  //respond a message from the error object
  res.json({
    message: err.message,
    //when  in production, return null or the stack trace as well.
    stack: process.env.NODE_ENV === 'production' ? null : err.stacks,
  })
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
