const express = require('express');

const scoresController = require('../controllers/scores.js');

const router = express.Router();

router.get('/scores', scoresController.getScores);

module.exports = router;
