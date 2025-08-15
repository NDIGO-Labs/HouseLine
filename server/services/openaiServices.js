const axios = require('axios');

exports.analyzeSymptoms = async (symptomsText) => {
    try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
            prompt: `Analyze the following symptoms and provide a possible diagnosis:{symptomsText}`,
            max_tokens: 150
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            }
        });

        return response.data.choices[0].text.trim();
    } catch (error) {
        throw new Error('Error analyzing symptoms with OpenAI');
    }
};
