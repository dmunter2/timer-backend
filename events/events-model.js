const db = require('../database/dbconfig');


module.exports = {
     findBy, 
     findById,
     update,
     add,
     delete,
     insert
}


function findBy(){
     return db('events').select('year', 'month', 'day', 'description', 'events_id', 'users_id')
}

function findById(id){
     return db('events').where({users_id: id}).first()
}
// .select('year', 'month', 'day', 'description', 'events_id', 'users_id')


async function add(event) {
     const [id] = await db('events').insert(event);

     return findById(id);
}



function insert(user) {
    return db('exercises')
        .insert(task)
        .then(ids => {
            return getById(ids[0]);
        });
}




function remove(event_id) {
    return db('events')
        .where('event_id', event_id)
        .del()
}