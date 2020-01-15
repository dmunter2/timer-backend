const router = require('express').Router()
const userDb = require('../users/users-model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const secrets = require('../config/secrets')

router.post('/register', (req,res) => {

    if(!req.body.username || !req.body.password){
        res.status(400).json({message: "Please enter a username and password"})
    } else {
        const user = req.body
        const hash = bcrypt.hashSync(user.password, 10)
        user.password = hash

        userDb.add(body)
            .then(user => {
                res.status(200).json({ message: `${req.body.username} has been added to the db` })
            })
            .catch(err => {
                res.status(400).json(err)
            })  
        }
})




router.post('/login', (req,res) => {
    let {username, password} = req.body

    userDb.findBy({username})
        .first()
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)){
                const token = genToken(user)
                res.status(200).json({
                    message: `Welcome ${user.username} to Countdown`,
                    token: token,
                    user_id: `${user.id}`
                })
            } else {
                res.status(400).json({message: "invalid credentials"})
            }
        })
        
})



function genToken(user){
    const payload = {
        userid: user.id,
        username: user.username
    }

    const options = {
        expiresIn: "1hr"
    }

    const token = jwt.sign(payload, secrets.jwtSecret, options)

    return token;
}














module.exports = router;