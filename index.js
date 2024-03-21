require('dotenv').config()

const express = require('express')

const cors = require('cors')

require('./DB/connection')

const routes = require('./Ruotes/router')

const cartServer = express()

cartServer.use(cors())

cartServer.use(express.json())

cartServer.use(routes)

const PORT = 3000 || process.env.PORT

cartServer.listen(PORT,()=>{
    console.log(`Server connected at ${PORT}`);
})

cartServer.get('/',(req,res)=>{
    res.send('<h1> server running successfully and rdy to access client request <h1/>')
})