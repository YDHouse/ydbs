var ydbsmasterdata = require('./ydbsmasterdata');
var port = ydbsmasterdata.portmanager;

//모듈 임포트
var express = require('express');
var path = require('path');

//라우트로 분리시키기
var index = require('./index');
var books = require('./routes/books');

//view 설정
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app에 등록
app.use('/', index);
//books로 접속요청이 들어오면 books 파일로 이동시켜 준다
app.use('/books', books);

//서버가동
app.listen(port, () => {
    console.log(`서버가동!!!`);
});

