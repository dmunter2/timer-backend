const db = require('../database/dbconfig');


module.exports = {
    findBy,
    findById,
    update,
    add,
    insert,
    remove
}


function findBy() {
    return db('darkmode').select('year', 'month', 'day', 'description', 'events_id', 'users_id')
}

function findById(id) {
    return db('darkmode').where({ users_id: id }).first()
}
// .select('year', 'month', 'day', 'description', 'events_id', 'users_id')


async function add(event) {
    const [id] = await db('darkmode').insert(event);

    return findById(id);
}





