// script.js

// Form Validation
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form from submitting by default

    // Gather form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let service = document.getElementById('service').value;

    // Basic validation checks
    if (name === '' || email === '' || phone === '' || service === '') {
        alert('Please fill out all required fields.');
        return;  // Stop further execution if validation fails
    }

    // On successful validation
    alert('Thank you for booking an appointment!');
    
    // This is where you would handle the form submission (e.g., sending to a server)
});
