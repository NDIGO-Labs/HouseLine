const openaiService = require('../services/openaiService');

exports.uploadSymptoms = async (req, res) => {
    try {
        const { text } = req.body;
        const media = req.file;

        // Process the text and media as needed
        const analysis = await openaiService.analyzeSymptoms(text);

        res.status(200).json({
            message: 'Symptoms uploaded successfully',
            analysis: analysis
        });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while uploading symptoms' });
    }
};
