
const params = new URLSearchParams(window.location.search);
const patientId = params.get('patientId');
async function fetchResults() {
    try {
        const res = await fetch(`/api/patients/${patientId}`);
        const data = await res.json();

        document.getElementById('ai-analysis').textContent = data.aiAnalysis || 'Pending...';
        document.getElementById('doctor-diagnosis').textContent = data.diagnosis || 'Pending...';
    } catch (error) {
        console.error('Error fetching results:', error);
    }
}

// Poll every 5 seconds
setInterval(fetchResults, 5000);
fetchResults();
