const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const PORT = 4003;
const app = express();
app.use(bodyParser.json());


app.use('/events', (req, res)=>{
    const { type } = req.body;
});




app.listen(PORT, () => { console.log(`Listening on `)});