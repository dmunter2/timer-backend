const express = require('express')



const bcrypt = require('bcryptjs')
const cors = require('cors')

const server = express()




server.use(cors())

server.use(express.json())





server.use('/', (req,res) => {
    res.send('Welcome to the backend')
})





module.exports = server;