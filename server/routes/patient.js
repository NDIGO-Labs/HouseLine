const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const patientController = require('../controllers/patientController');
// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// Route to handle symptom uploads
router.post('/upload', upload.single('media'), patientController.uploadSymptoms);

module.exports = router;
