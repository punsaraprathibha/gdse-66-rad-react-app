const express
    = require('express');
const router
    = express.Router();
const ContactController
    = require('../controller/ContactController');

router.post('/submit', ContactController
    .submitContactDetails);

module.exports = router;