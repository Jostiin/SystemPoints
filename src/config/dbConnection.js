
const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host:'127.0.0.1',
        user:'root',
        database:'students_points',
        password:''
    
    });
};

/*
module.exports = () => {
    return mysql.createConnection({
        host:'boexv9bcsevpjalatgrl-mysql.services.clever-cloud.com',
        user:'uryjx9fh58w43jvk',
        database:'boexv9bcsevpjalatgrl',
        password:'zijz1VnnTB08xe85LqJm',
        port:'3306'
    });
};

*/