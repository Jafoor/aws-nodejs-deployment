const express = require('express');

const app = express();

app.get('/api/get', (req, res) => {
    res.send({
        name: 'Abu Jafor',
        date: new Date(),
        url: req.url
    })
})

app.get("/api/get/:id", (req, res) => {
        res.send({
            name: 'Abu Jafor',
            date: new Date(),
            id: req.params.id
        })
    })

app.listen(8000, () => {
    console.log('Server is running on port 8000');
})