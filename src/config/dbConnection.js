const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'brj0ndeqg40musybuxmz-mysql.services.clever-cloud.com',
        user: 'ulmzpjr949kkvc8m',
        database: 'brj0ndeqg40musybuxmz',
        password:'9n50XZoHo1XESm03yKDJ',
        port:'3306'
    });
};