// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      host: '127.0.0.1:50775',
      user: 'postgres',
      password: '48932',
      database: 'timer'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },



  production: {
    client: 'pg',
    connection: process.env.HEROKU_POSTGRESQL_YELLOW_URL,
    migrations: {
      tableName: './data/migrations'
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

};
