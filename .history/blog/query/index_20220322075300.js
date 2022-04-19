const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 4002;
const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
    console.log('/posts');
    res.send(posts);
});

app.post('/events', (req, res) => {
    console.log(`Received Event : ${req.body.type}`);

    const { type, data } = req.body;

    if ( type === 'PostCreated'){
        const { id , title } = data;
        posts[id] = { id, title, comments: [] };
    }
    else if ( type === 'CommentCreated') {
        const { id , content, postId } = data;
        const post = posts[postId];

        post.comments.push({ id, content });
    }

    console.log(posts);
    res.send({});
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});