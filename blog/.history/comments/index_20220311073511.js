const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const PORT = 4001;
const app = express();
app.use(bodyParser.json());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
    const postId = req.params.id;
    res.send(commentsByPostId[postId] || []);
});

app.post('/posts/:id/comments', (req, res) => {
    const postId = req.params.id;

    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;

    const comments = commentsByPostId[postId] || [];

    comments.push({ id: commentId, content });

    commentsByPostId[postId] = comments;

    res.status(201).send(comments);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});