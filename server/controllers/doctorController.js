
let diagnoses = [];

const getAllEntries = (req, res) => {
    res.status(200).json(diagnoses);
};

const addDoctorDiagnosis = (req, res) => {
    const { patientId, doctorNote, prescription } = req.body;

    if (!patientId || !doctorNote || !prescription) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const updatedEntry = {
        patientId,
        doctorNote,
        prescription,
        reviewedAt: new Date(),
    };

    diagnoses.push(updatedEntry);
    res.status(200).json({ message: 'Diagnosis added', data: updatedEntry });
};

module.exports = {
    getAllEntries,
    addDoctorDiagnosis
};
