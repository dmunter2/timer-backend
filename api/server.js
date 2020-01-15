const express = require('express')
const bcrypt = require('bcryptjs')
const cors = require('cors')
const authRouter = require('../auth/auth-router')
const server = express()


server.use(cors())

server.use(express.json())
server.use('/api/auth', authRouter)




server.use('/', (req,res) => {
    res.send('Welcome to the backend')
})





module.exports = server;