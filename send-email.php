<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Email details
    $to = "kelder.mikk@gmail.com";  // Replace with your email
    $subject = "New Message from Perfume Vending Website";
    $body = "Email: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message successfully sent!";
    } else {
        echo "Failed to send message.";
    }
}
?>
