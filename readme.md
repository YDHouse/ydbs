connection.connect();
    connection.query('SELECT * FROM books', function(error, results, fields) {
        if(error) {
            console.log(error);
        }
        console.log(results);
    });
connection.end();

