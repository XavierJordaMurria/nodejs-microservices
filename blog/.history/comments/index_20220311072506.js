const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const { restart } = require('nodemon');

const PORT = 4001;
const app = express();
app.use(bodyParser.json());

const comments = {};   

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.post('/comments', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    comments[id] = {
        id,
        title
    };

    res.status(201).send(comments[id]);
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});