
const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host:'boexv9bcsevpjalatgrl-mysql.services.clever-cloud.com',
        user:'uryjx9fh58w43jvk',
        database:'boexv9bcsevpjalatgrl',
        password:'zijz1VnnTB08xe85LqJm',
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