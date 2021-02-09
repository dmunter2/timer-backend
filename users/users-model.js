const db = require('../database/dbconfig');


module.exports = {
    findBy,
    findById,
    add,
    remove
}


function findBy() {
    return db('users').select('username')
}

function findById(id) {
    return db('events').where(id)
}
// .select('year', 'month', 'day', 'description', 'events_id', 'users_id')


async function add(user) {
    const [id] = await db('users').insert(user);

    return findById(id);
}



// function insert(user) {
//     return db('users')
//         .insert(user)
//         .then(ids => {
//             return getById(ids[0]);
//         });
// }




function remove(event_id) {
    return db('events')
        .where('event_id', event_id)
        .del()
}