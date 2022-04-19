const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/events", (req, res) => {
    const event = req.body;
    axios.post("http://localhost:4000")
});