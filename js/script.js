document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // You could add form validation or form submission logic here.
    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    alert("Thank you for your message, " + name + "! I'll get back to you soon.");
});
