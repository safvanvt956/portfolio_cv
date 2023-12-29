function sendWhatsAppMessage() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Replace 'your_phone_number' with the actual phone number including the country code
    var phoneNumber = '9562157043';

    // Check if any of the fields is empty
    if (name === '' || email === '' || subject === '' || message === '') {
        alert("Please fill in all fields before sending the message.");
        return;
    }

    // Check if the email format is valid
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Create the WhatsApp message
    var whatsappMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;

    // Create the WhatsApp API link
    var whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Open the WhatsApp link in a new tab
    window.open(whatsappLink, '_blank');

    // Optionally, you can reset the form after sending the message
    document.getElementById('contactForm').reset();
}