const express = require('express');
const mongoose = require('mongoose');

const app = express();

const db = mongoose.connect(
  'mongodb://localhost/ninajago',
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) return `problem connecting to db: error ${err}`;
    return console.log('connected to db');
  }
);

const port = process.env.PORT || '1233';
app.use(express.json());

const Ninja = require('./models/ninjaModel');
const ninjaRoute = require('./routes/ninjaRoute')(Ninja);

app.use('/api/ninjas', ninjaRoute);

app.listen(port, () => console.log(`listening on port ${port}`));
