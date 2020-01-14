// const knex = require('knex');

// const config = require('../knexfile');

// const dbEnv = process.env.DB_ENV || 'development'

// module.exports = knex(config|dbEnv)




const knex = require('knex');


const knexConfig = require('../knexfile')

module.exports = knex(knexConfig.development);

