function submit() {
    // Removing form from the DOM.
    var form = document.getElementById("form");
    form.style.display = "none";

    // Showing a successfull message.
    var message = document.getElementById("submission-message");
    message.innerHTML = "Thank You for submitting!";
}