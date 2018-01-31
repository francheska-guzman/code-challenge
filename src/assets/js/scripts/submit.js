// Function to submit the form.

function submit() {
    var form = document.getElementById("form");
    form.style.display = "none";

    console.log("Form removed from DOM.");

    var message = document.getElementById("submission-message");
    message.innerHTML = "Thank You for submitting!";

    console.log("Showing a thank you message.");
}