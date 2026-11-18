//Dark Mode Toggle
const themeButton = document.getElementById("theme-toggle");
themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode"); 
    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
});
//Contact Form Validation
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Stops page from refreshing
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    if (name === "" || email === "" || message === "") {
        formStatus.style.color = "red";
        formStatus.textContent = "Please fill in all fields before submitting.";
    } else {
        formStatus.style.color = "green";
        formStatus.textContent = "Thank you, " + name + "! Your message has been sent.";
        contactForm.reset();
    }
});