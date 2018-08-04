var ydbsmasterdata = require('./ydbsmasterdata');
var port = ydbsmasterdata.portmanager;

//모듈 임포트
var express = require('express');
var path = require('path');

//라우트로 분리시키기
var books = require('./routes/books');

//view 설정
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//페이지 별 js 파일 연결
app.use('/', books);    //장부 페이지

//서버가동 확인
app.listen(port, () => {
    console.log(`서버가동!!!`);
});

