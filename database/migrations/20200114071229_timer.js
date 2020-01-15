
exports.up = function(knex) {
    return knex.schema

    .createTable('users', user => {
        user.increments("id");

        user
            .string('username', 128)
            .notNullable()
            .unique();

        user
            .string('password', 128)
            .notNullable()

        user
            .string('email', 128)
            .unique()
    })
    .createTable('events', event => {
        event.increments('event_id')

        event
            .integer('year')
            .notNullable()

        event
            .integer('month')
            .notNullable()

        event
            .integer('day')
            .notNullable();

        event
            .string('users_id')
            .unsigned()
            .references('user.id')


    })

    .createTable('darkmode', dark => {
        dark
            .boolean('on')
            .notNullable()
        
        dark
            .string('users_id')
            .unsigned()
            .references('user.id')

    })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('events')
    .dropTableIfExists('darkmode')

};
