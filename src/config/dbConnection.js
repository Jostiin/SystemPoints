
const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host:'brj0ndeqg40musybuxmz-mysql.services.clever-cloud.com',
        user:'ulmzpjr949kkvc8m',
        database:'brj0ndeqg40musybuxmz',
        password:'9n50XZoHo1XESm03yKDJ',
        port:'3306'
    });
};
/*
module.exports = () => {
    return mysql.createConnection({
        host:'containers-us-west-181.railway.app',
        user:'root',
        database:'railway',
        password:'wze5bM5Mo6YZfInGBuz6',
        port:'7375'
    });
};
*/