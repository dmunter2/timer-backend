// const knex = require('knex');

// const config = require('../knexfile');

// const dbEnv = process.env.DB_ENV || 'development'

// module.exports = knex(config|dbEnv)



const knex = require('knex');

const secrets = require('../config/secrets.js');



const environment = secrets.environment || 'development';
const config = require('../knexfile.js')[environment];

module.exports = knex(config);

