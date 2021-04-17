require('dotenv').config()

import express from 'express'
import mongoose from 'mongoose'
import cors from './middleware/cors'
import userRouter from './routes/user'
import authRouter from './routes/auth'
import { dbConfig, dbConnectionString, port } from './config'

mongoose.connect(dbConnectionString, dbConfig)

const app = express()
app.use(express.json())
    .use(cors)
    .use('/api', userRouter)
    .use('/api', authRouter)
    .listen(port)
