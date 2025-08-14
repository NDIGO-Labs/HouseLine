const form = document.getElementById('uploadForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const res = await fetch('http://localhost:5000/api/patient/upload', {
        method: 'POST',
        body: formData,
    });
    const result = await res.json();
    console.log(result);
});

