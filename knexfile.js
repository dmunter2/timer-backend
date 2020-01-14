

// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './timer.db3'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './database/migrations',
    }
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/timer3.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    }
  },


  production: {
    client: 'pg',
    connection: process.env.HEROKU_POSTGRESQL_YELLOW_URL,
    migrations: {
      tableName: './database/migrations'
    },
    pool: {
      min: 2,
      max: 10
    },
  }
}
