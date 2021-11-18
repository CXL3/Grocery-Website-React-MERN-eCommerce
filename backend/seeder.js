import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    // clear everything first before input
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()
    // an array of created users
    const createdUsers = await User.insertMany(users)
    // fitst item of the array in User.js with ID
    const adminUser = createdUsers[0]._id
    //spread operator to spread all the product data in there, add the admin user
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })
    // input sampleProducts into the Products model
    await Product.insertMany(sampleProducts)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}
const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}