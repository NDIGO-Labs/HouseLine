
exports.doctorRespond = (req, res) => {
    const { diagnosis, patientId } = req.body;
    // Simulate saving/sending feedback to patient
    res.json({ message: 'Diagnosis received', data: { diagnosis, patientId } });
};
