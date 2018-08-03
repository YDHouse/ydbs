connection.connect();
    connection.query('SELECT * FROM books', function(error, results, fields) {
        if(error) {
            console.log(error);
        }
        console.log(results);
    });
connection.end();



var ydbsmasterdata = require('./ydbsmasterdata');
var sqlword = ydbsmasterdata.sqlmanager;

//모듈 임포트
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//DB 연결
var connection = mysql.createConnection({
    host: 'localhost',
    port: 1637,
    user: 'root',
    password: sqlword,
    database: 'ydbs'
});

//index.ejs 파일 연결
router.get('/', (req, res, next) => {
    //res.send('main');
    res.render('index');
    console.log("인덱스");
});

module.exports = router;



