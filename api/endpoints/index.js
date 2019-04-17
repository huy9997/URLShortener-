const express = require('express');
const router  = express.Router();

const lastHundredURL = require('./lastHundredURL')
const numberOfVisits = require('./numberOfVisits')
const shortenedURL = require('./shortenedURL')
const topTenURL = require('./topTenURL');

router.use('/lastHundredURL',lastHundredURL);
router.use('/numberOfVisits',numberOfVisits);
router.use('/shortenedURL',shortenedURL);
router.use('/topTenURL',topTenURL);

module.exports = router;
