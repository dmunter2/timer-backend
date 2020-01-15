const db = require('../database/dbconfig');


module.exports = {
     findBy, 
     findById,
     update,
     add,
     delete
}


function finbBy(){
     return db('events').select('')
}


function find() {
     return db('exercises').select('exercise_name', 'muscle_group', 'weight_number', 'reps', 'date', 'sets', 'goals', 'user_id')
}