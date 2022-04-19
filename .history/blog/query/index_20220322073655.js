const express = require('express');
const cors = require('cors');

const PORT = 4004;
const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/posts', () => {
    console.log('/posts')
    res.send({});
});

app.post('/events', (req, res) => {
    console.log(`Received Event : ${req.body.type}`);
    res.send({});
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});