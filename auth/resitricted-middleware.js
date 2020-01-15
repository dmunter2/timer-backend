const secret = require('../config/secrets')
const bcrypt = require('bcryptjs')



module.exports = (req, res, next) => {

    const token = req.headers.authorization

    if(token) {
        jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
            if(err) {
                res.status(401).json({message: "Cant Pass -- Restricted Middleware"})
            } else {
                req.decodedJwt = decodedToken
                next();
            }
        }) 
    } else {
        res.status(401).json({message: "Cant recieve info"})
    }
}
