import express from 'express'
import errorHandlerMiddleware from './middleware/error-handler.js'
import dotenv from 'dotenv'
dotenv.config()

// db
import connectDB from './db/connect.js'
const app = express()

//routes
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'

import notFoundMiddleware from './middleware/not-found.js'
//middleware
app.use(express.json)

app.get('/',(req,res) => {
    throw new Error('error')
    res.send("WELCOME")
})
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/jobs',jobsRouter)
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is running ${port}...`)
})

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server is running ${port}...`)
        })
    }
    catch(error){
            console.log(error)
    }
}
start()