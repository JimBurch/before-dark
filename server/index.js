const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../database/index.js');
const getSunset = require('./controllers/sunset.js')
const storeLeaveStats = require('../database/controllers/leave.js');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on PORT:${PORT}`)
});

// ROUTERS

app.get('/sunset/:zip', getSunset);
app.post('/leave', storeLeaveStats);