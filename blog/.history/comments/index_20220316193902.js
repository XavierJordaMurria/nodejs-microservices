const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const PORT = 4001;
const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
    const postId = req.params.id;
    res.send(commentsByPostId[postId] || []);
});

app.post('/posts/:id/comments', (req, res) => {
    const postId = req.params.id;

    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;
    console.log(content)
    const comments = commentsByPostId[postId] || [];

    comments.push({ id: commentId, content: content });

    commentsByPostId[postId] = comments;

    res.status(201).send(comments);
});
https://liveagent-trial.cognigy.ai/platform/api/v1/accounts/{account_id}/account_users
app.post('/platform/api/v1/accounts/{account_id}/account_users', (req, res) => {
    console.log(`create account accountId: ${req.params.account_id}`);
    console.log(req.body);
    res.sendStatus(200);
});


app.delete('/platform/api/v1/accounts/:account_id/account_users', (req, res) => {
    console.log(`delete account accountId: ${req.params.account_id}`);
    console.log(req.body);
    res.sendStatus(200);
});

app.post('/api/v1/accounts/:account_id/inbox_members/:inbox_id', (req, res) => {
    console.log(`inboxupdate accountId: ${req.params.account_id}, inboxId: ${req.params.inbox_id}`);
    console.log(req.body);
    res.sendStatus(200);
});

app.delete('/api/v1/accounts/:account_id/inbox_members/:inbox_id', (req, res) =>{
    console.log(`inboxdelte accountId: ${req.params.account_id}, inboxId: ${req.params.inbox_id}`);
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});