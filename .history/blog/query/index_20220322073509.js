const express = require('express');
const cors = require('cors');

const PORT = 4004;
const app = express();
app.use(bodyParser.json());
app.use(cors());