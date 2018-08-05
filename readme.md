        var allData = {
					"dateStart": dateStart,
          "dateEnd": dateEnd
        };

        $.ajax({
          type: 'POST',
          data: JSON.stringify(allData),
          contentType: 'application/json',
          url: '/booksSearch/',						
          success: function(data) {
            console.log('success');
          }





router.post('/booksSearch', jsonParser, function(req, res) {
    //console.log("body: " + req.body);
    var dateStart = req.param("dateStart");
    var dateEnd = req.param("dateEnd");
    connection.query('SELECT DATE_FORMAT(booksdate, "%x-%m-%d")AS bdate, booksclassfication, booksdetails, booksclient, booksincome, booksincomevat, booksexpense, booksexpensevat, booksasset, booksassetvat, booksremarks FROM BOOKS WHERE booksdate BETWEEN "'+dateStart+'" AND "'+dateEnd+'"', function(err, booksList) {
        //에러값이 있다면 로그에 표시
        if(err) console.log(err);
        //views 폴더에 있는 booksList파일로 data를 보낸다.
        res.send(req.body);
    });
});