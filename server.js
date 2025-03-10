const express = require('express');

const app = express();
require('dotenv').config()

app.get('/api/get', (req, res) => {
    res.send({
        name: 'Abu Jafor',
        date: new Date(),
        url: req.url
    })
})

app.get("/api/get/:id", (req, res) => {
        res.send({
            name: process.env.NAME,
            date: new Date(),
            id: req.params.id
        })
    })

app.listen(process.env.PORT, () => {
    console.log('Server is running on port ', process.env.PORT);
})