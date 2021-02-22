const express = require('express');
const router = express.Router();
const axios = require('axios');

const apiKey = '284027b5cfc736b902b27754a7064f44';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}`;

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/weather', async (req, res) => {
    const { data } = await axios.get(`${weatherUrl}&zip=${req.query.zip}`);
    res.send(data);
});


module.exports = router;