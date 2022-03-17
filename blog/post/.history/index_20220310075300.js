const express = require('express');
const bodyParser = require('body-parser')
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

    restart.status(201).send(posts[uid]);
});


app.listen(4000, () => {
    console.log('Listening on port 4000');
});