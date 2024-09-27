document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (email && message) {
        // Simulate form submission
        console.log("Email:", email);
        console.log("Message:", message);

        // Show confirmation message
        alert('Your message has been sent!');

        // Clear form fields
        document.getElementById("email").value = '';
        document.getElementById("message").value = '';
    }
});
