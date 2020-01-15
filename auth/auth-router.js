const router = require('express').Router()
const userDb = require('../users/users-model')



router.register('/register', (req,res) => {
    const body = req.body
    userDb.add(body)
        .then(user => {
            res.status(200).json({message: `${req.body.username} has been added to the db`})
        })
        .catch(err => {
            res.status(400).json(err)
        })
})




module.exports = router;