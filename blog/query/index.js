const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const PORT = 4002;
const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

const handleEvent = (type, data) => {
    if ( type === 'PostCreated'){
        const { id , title } = data;
        posts[id] = { id, title, comments: [] };
    }
    else if ( type === 'CommentCreated') {
        const { id , content, postId, status } = data;
        const post = posts[postId];

        console.log(`status: ${status}`);
        post.comments.push({ id, content, status });
    }
    else if ( type === 'CommentUpdated') {
        const { id , content, postId, status } = data;
        const post = posts[postId];

        const comment = post.comments.find( c => c.id === id );
        console.log(`status: ${status}`);
        comment.status = status;
        comment.content = content;
    }
};

app.get('/posts', (req, res) => {
    console.log('/posts');
    res.send(posts);
});

app.post('/events', (req, res) => {
    console.log(`Received Event : ${req.body.type}`);

    const { type, data } = req.body;

    handleEvent(type, data);    
    res.send({});
});

app.listen(PORT, async () => {
    console.log(`Listening on port ${PORT}`);
    try {
      const res = await axios.get("http://event-bus-srv:4005/events");
   
      for (let event of res.data) {
        console.log("Processing event:", event.type);
   
        handleEvent(event.type, event.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  });