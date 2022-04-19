const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const PORT = 4001;
const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
    const postId = req.params.id;
    res.send(commentsByPostId[postId] || []);
});

app.post('/posts/:id/comments', async (req, res) => {
    const postId = req.params.id;

    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;
    console.log(content)
    const comments = commentsByPostId[postId] || [];

    comments.push({ id: commentId, content: content, status: 'pending' });

    commentsByPostId[postId] = comments;

    await axios.post('htto:localhost:4005/events', { type: "CommentCreated", data: { id: commentId, content, postId, status: 'pending' } });

    res.status(201).send(comments);
});

app.post('/events', async (req, res) => {
    console.log(`Received Event : ${req.body.type}`);

    const { type, data } = req.body;
    
    if (type === 'CommentModerated' ) {
        const { postId, id, status, conent } = data;
        const comments = commentsByPostId[postId];
        const comment = comments.find(c => c.id === id );

        comment.status = status;
        console.log(`status updated to: ${status}`);
        await axios.post('http://localhost:4005', {
            type: 'CommentUpdated',
            data: {
                id,
                postId,
                content,
                status
            }
        })
    }

    res.send({});
});

app.post('/platform/api/v1/accounts/:account_id/account_users', (req, res) => {
    console.log(`create account accountId: ${req.params.account_id}`);
    console.log(req.body);
    res.sendStatus(200);
});


app.delete('/platform/api/v1/accounts/:account_id/account_users', (req, res) => {
    console.log(`delete account accountId: ${req.params.account_id}`);
    console.log(req.body);
    res.sendStatus(200);
});

app.post('/api/v1/accounts/:account_id/inbox_members', (req, res) => {
    console.log(`inboxupdate accountId: ${req.params.account_id}, inboxId: ${req.params.inbox_id}`);
    console.log(req.body);
    res.sendStatus(200);
});

app.delete('/api/v1/accounts/:account_id/inbox_members', (req, res) => {
    console.log(`inboxdelte accountId: ${req.params.account_id}, inboxId: ${req.params.inbox_id}`);
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});