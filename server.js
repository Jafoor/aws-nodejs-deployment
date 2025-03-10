const express = require('express');

const app = express();

app.get('/api/get', (req, res) => {
    res.send({
        name: 'Abu Jafor',
        date: new Date(),
        ip: req.ip,
        method: req.method,
        url: req.url
    })
})

app.listen(8000, () => {
    console.log('Server is running on port 8000');
})