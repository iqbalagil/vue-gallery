import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config()

const app = express()
const port = 3000

app.use(cors())

app.get('/', (req,res) =>{
    res.status(200).json({
        message: "Message from enpoint express"
    })
})

app.listen(port, () => {
    console.log(`App listening to ${port}`)
})

mongoose.connect(process.env.DATABASE, {

}).then(()=> {
    console.log('Database Connected')
})
