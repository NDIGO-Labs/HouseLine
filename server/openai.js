const axios = require('axios');

exports.analyzeSymptoms = async (text) => 
  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',

    model: 'gpt-4',
    messages: [role: 'user', content: `Patient symptoms: { text } ` }],
    },
{
    headers: {
        'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
            'Content-Type': 'application/json',
      },
}
  );

return response.data.choices[0].message.content;
};
