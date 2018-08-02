const express = require('express');
const app = express();
const port = 7361;

app.get('/', (req, res, next) => {
    res.send('hello world!');
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});