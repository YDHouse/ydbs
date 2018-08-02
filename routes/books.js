var ydbsmasterdata = require('../ydbsmasterdata');
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

//DB에서 data 가져와서 리스트로 만들기
router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM BOOKS', function(err, rows) {
        //에러값이 있다면 로그에 표시
        if(err) console.log(err);

        //views 폴더에 있는 booksList파일로 data를 보낸다.
        res.render('booksList', { title:'BooksList', booksList: rows});
    });
});

module.exports = router;
