import express from 'express'
import errorHandlerMiddleware from './middleware/error-handler.js'
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'
import morgan from 'morgan'


// db
import connectDB from './db/connect.js'
const app = express()

//routes
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'

import notFoundMiddleware from './middleware/not-found.js'
//middleware
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}
app.use(express.json())

app.get('/',(req,res) => {
  res.send('Welcome')
})

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/jobs',jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000


// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}...`)
// })
const start = async () => {
    try {
      await connectDB(process.env.MONGO_URL)
      app.listen(port, () => {
        console.log(`Server is listening on port ${port}...`)
      })
    } catch (error) {
      console.log(error)
    }
  }

  start()
 
  