const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const PORT = 4001;
const app = express();
app.use(bodyParser.json());

const commentsByPostId = {};   

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId);
});

app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;

    const comments = co

    res.status(201).send(commentsByPostId[id]);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});