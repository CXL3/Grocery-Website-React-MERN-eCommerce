
import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    //use async await because mongoose.connect is always returning a promise
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error:${error.message}`)
    //exit with failure
    process.exit(1)
  }
}
export default connectDB
