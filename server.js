const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')
const dotenv = require('dotenv')

//env config
dotenv.config()
//reset object
const app = express()

//middleware

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.get('/' , (req,res)=>{
    res.status(200).send({
        "message" : "node server"
    })
})
//port
const PORT = process.env.PORT || 5000

//listen
app.listen(PORT , ()=>{
    console.log(`server is running on ${process.env.DEV_MODE} port NO ${PORT}`.bgCyan.white);
    
})