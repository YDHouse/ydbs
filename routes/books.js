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

router.get('/', function(req, res, next) {
    res.render('index');
    console.log("홈");
});

router.get('/books', function(req, res, next) {
    connection.query('SELECT DATE_FORMAT(booksdate, "%x-%m-%d")AS bdate, booksclassfication, booksdetails, booksclient, booksincome, booksincomevat, booksexpense, booksexpensevat, booksasset, booksassetvat, booksremarks FROM BOOKS', function(err, rows) {
        //에러값이 있다면 로그에 표시
        if(err) console.log(err);
        //views 폴더에 있는 booksList파일로 data를 보낸다.
        res.render('booksList', { title:'BooksList', booksList: rows});
        console.log("장부");
    });
});

router.get('/booksSearch', function(req, res, next) {
    console.log("조회");
});

router.get('/booksInsert', function(req, res, next) {
    console.log("기장");
});

module.exports = router;
