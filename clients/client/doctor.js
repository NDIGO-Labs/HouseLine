const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

router.post('/respond', doctorController.doctorRespond);

module.exports = router;
