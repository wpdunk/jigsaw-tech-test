const express = require('express');
const router = express.Router();

const data = require('../data');

router.get('/', async (_, res) => res.status(200).json(data));

module.exports = router;