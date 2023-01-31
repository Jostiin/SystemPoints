const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();

//settings

app.use(express.static(path.join(__dirname,'../app')));
app.use('/css',express.static(__dirname +'../app/css'));
app.use('/script',express.static(__dirname +'../app/script'));
app.use('/icons',express.static(__dirname +'../app/icons'));
app.set('port',process.env.PORT || 8080);


app.set('view engine','ejs');

app.set('views',path.join(__dirname,'../app/views'));



// parser

app.use(bodyparser.urlencoded({extended: false}));
module.exports = app;