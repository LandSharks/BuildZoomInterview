const express = require('express');
const app = express();
const port = 3001;


app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use('/', require('./routes/root.routes'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});