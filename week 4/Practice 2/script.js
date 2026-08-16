function validateEmail(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        message.textContent = "Valid email address!";
    } else {
        message.textContent = "Invalid email address!";
    }
}