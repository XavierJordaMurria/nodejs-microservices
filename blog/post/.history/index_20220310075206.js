const express = require('express');
const { randomBytes } = require('crypto');
const { restart } = require('nodemon');

const app = express();

const posts = {};


app.get('/post', (req, res) => {
    res.send(posts);
});

app.post('/post', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id,
        title
    };

    restart.send
});


app.listen(4000, () => {
    console.log('Listening on port 4000');
});