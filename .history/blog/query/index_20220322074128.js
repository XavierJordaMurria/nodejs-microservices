const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 4002;
const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/posts', () => {
    console.log('/posts');
    res.send({});
});

app.post('/events', (req, res) => {
    console.log(`Received Event : ${req.body.type}`);

    const { typ}
    res.send({});
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});