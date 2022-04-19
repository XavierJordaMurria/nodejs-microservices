const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const PORT = 4001;
const app = express();
app.use(bodyParser.json());