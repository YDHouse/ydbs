var ydbsmasterdata = require('./ydbsmasterdata');
var sqlword = ydbsmasterdata.sqlmanager;

//모듈 임포트
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 1637,
    user: 'root',
    password: sqlword,
    database: 'ydbs'
});

router.get('/', (req, res, next) => {
    res.send('main');
});

module.exports = router;
