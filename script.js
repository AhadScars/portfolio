// Simple form validation for contact form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields!');
    } else {
        alert('Thank you for your message, ' + name + '! I will get back to you shortly.');
        // Here you can also send the form data to a server or an email if needed
    }
});
