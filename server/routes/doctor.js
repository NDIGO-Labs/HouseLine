const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

router.get('/', doctorController.getAllEntries);
router.post('/diagnose', doctorController.addDoctorDiagnosis);

module.exports = router;
