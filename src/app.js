const express = require('express');

const scoresRoutes = require('./routes/scores');

const app = express();

app.use('/scores', scoresRoutes);

app.listen(8080);
