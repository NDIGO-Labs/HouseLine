document.getElementById('uploadForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
        const response = await fetch('http://localhost:5000/api/patient/upload', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        alert(result.analysis);
    } catch (error) {
        alert('Error uploading symptoms');
    }
});
