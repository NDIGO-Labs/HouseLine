const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const patientRoutes = require('./api/routes/patient');
const doctorRoutes = require('./api/routes/doctor');
app.use('/api/patient', patientRoutes);
app.use('/api/doctor', doctorRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
