const router = require('express').Router();
const ussdController = require('../Controllers/ussdController');

// Route will be POST /ussd/
router.post('/', ussdController.handleUSSDRequest);

module.exports = router;
