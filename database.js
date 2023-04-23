//Create a database connection from mysql module
import { createConnection } from 'mysql';
var connection = createConnection({
    host: 'localhost',
    user: '',
    password: 'password',
    database: 'database'
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
//
export { connection };