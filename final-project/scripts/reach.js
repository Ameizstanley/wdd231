document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop default submit

    // Collect form data
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('emailAddress').value;
    const subject = document.getElementById('subject').value;
    const concern = document.querySelector('input[name="concern"]:checked')?.value || '';
    const message = document.getElementById('yourMessage').value;

    // Save to localStorage
    localStorage.setItem('contactFullName', fullName);
    localStorage.setItem('contactEmail', email);
    localStorage.setItem('contactSubject', subject);
    localStorage.setItem('contactConcern', concern);
    localStorage.setItem('contactMessage', message);

    // Submit the form programmatically
    e.target.submit();
});
