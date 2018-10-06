const express = require('express');
const router = express.Router();

const status = require('../constants');

// define the home page route
router.get('/', (req, res) => {
    res.status(status.HTTP_STATUS.NO_CONTENT).json();
})
    // define the about route
router.get('/details/:id', function (req, res) {
    res.status(status.HTTP_STATUS.NO_CONTENT).json();
})

module.exports = router;