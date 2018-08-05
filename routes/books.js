var ydbsmasterdata = require('../ydbsmasterdata');
var sqlword = ydbsmasterdata.sqlmanager;

//모듈 임포트
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'localhost',
    port: 1637,
    user: 'root',
    password: sqlword,
    database: 'ydbs'
});


router.get('/books', function(req, res) {
    connection.query('SELECT DATE_FORMAT(booksdate, "%x-%m-%d")AS bdate, booksclassfication, booksdetails, booksclient, booksincome, booksincomevat, booksexpense, booksexpensevat, booksasset, booksassetvat, booksremarks FROM BOOKS', function(err, rows) {
        //에러값이 있다면 로그에 표시
        if(err) console.log(err);
        //views 폴더에 있는 booksList파일로 data를 보낸다.
        res.render('booksList', { title:'first', booksList: rows});
    });
});

router.get('/booksSearch/:dateStart/:dateEnd', function(req, res, next) {
    var dateStart = req.params.dateStart;
    var dateEnd = req.params.dateEnd;
    var dateAll = [dateStart, dateEnd]; //날짜를 담아서 화면의 타이틀로 보내기 위해 배열에 담는다.
    connection.query('SELECT DATE_FORMAT(booksdate, "%x-%m-%d")AS bdate, booksclassfication, booksdetails, booksclient, booksincome, booksincomevat, booksexpense, booksexpensevat, booksasset, booksassetvat, booksremarks FROM BOOKS WHERE booksdate BETWEEN "'+dateStart+'" AND "'+dateEnd+'"', function(err, rows) {
        //에러값이 있다면 로그에 표시
        if(err) console.log(err);
        //views 폴더에 있는 booksList파일로 data를 보낸다.
        res.render('booksList', { title:dateAll, booksList: rows });
    });
});

router.get('/booksInsert', function(req, res) {
    console.log("기장");
});

module.exports = router;
