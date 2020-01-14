
exports.up = function(knex) {
    return knex.schema

    .createTable('users', users => {
        users.increments("id");

        users.string('username', 128).notNullable().unique();

        users.string('password', 128).notNullable()

        users.string('email', 128).unique()
    })
    .createTable('events', events => {
        events.increments('event_id')

        events.integer('year').notNullable()

        events.integer('month').notNullable()

        events.integer('day').notNullable();

        events.string('users_id').unsigned().references('users.id')


    })

    .createTable('darkmode', darkmode => {
        darkmode.boolean('on').notNullable()
        
        darkmode.string('users_id').unsigned().references('users.id')

    })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('events')
    .dropTableIfExists('darkmode')

};
