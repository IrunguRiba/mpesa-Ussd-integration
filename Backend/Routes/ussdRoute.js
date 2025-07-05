const router = require('express').Router();
const ussdController = require('../Controllers/ussdController');

// Route will be POST /ussd/
router.post('/', ussdController.handleUSSDRequest);

// Optional: POST /ussd/callback if you separate logic for callbacks
router.post('/callback', ussdController.handleUSSDCallback);

module.exports = router;
