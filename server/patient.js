const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const multer = require('multer');
const upload = multer(dest: 'uploads/');

router.post('/upload', upload.any(), patientController.handlePatientInput);

module.exports = router;

