const express = require('express');
const { addEvent } = require('../controllers/EvenimentController');

const router = express.Router();

//router.post('/register', registerUser);
router.post('/add', addEvent);

module.exports = router;
