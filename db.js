let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'suraj',
    database: 'sportsgeekdb'
});

connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    // console.log('Connected to the MySQL server.');
});

module.exports = connection;

// connection.end(function(err) {
//     if (err) {
//         return console.log('error:' + err.message);
//     }
//     console.log('Close the database connection.');
// });

// connection.destroy();

// module.exports = connection;
