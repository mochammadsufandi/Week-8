const Pool = require('pg').Pool;
const pool = new Pool ({
    user : 'postgres',
    host : 'localhost',
    database : 'workshop',
    password : 'Ccdn0koment',
    port : 5432
})

const newDB = new Pool ({
    user : 'postgres',
    host : 'localhost',
    password : 'Ccdn0koment',
    port : 5432
})

// newDB.query('DROP DATABASE week_8');
module.exports = {pool,newDB}