const patientId = 'sample123'; // Replace dynamically as needed

fetch(`/api/patients/patientId`)
    .then(res => res.json())
    .then(data =>
        document.getElementById('symptoms').textContent = data.symptoms);
document.getElementById('ai-analysis').textContent = data.aiAnalysis;

if (data.image) document.getElementById('image').src = data.image;
if (data.video) document.getElementById('video').src = data.video;
if (data.audio) document.getElementById('audio').src = data.audio;
;

document.getElementById('diagnosis-form').addEventListener('submit', e =>
    e.preventDefault());
const diagnosis = document.getElementById('diagnosis').value;

fetch(`/api/patients/${patientId}/diagnosis`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ diagnosis })
})
    .then(res => res.json())
    .then(data => alert('Diagnosis submitted!'));

