
const openaiService = require('../openaiService');

exports.handlePatientInput = async (req, res) => 
  const text = req.body;

    try 
    const analysis = await openaiService.analyzeSymptoms(text);
    // You can simulate forwarding this to doctor side
    res.json(status: 'Received', ai_analysis: analysis);
   catch (err) 
    res.status(500).json(error: 'AI analysis failed');
    ;

