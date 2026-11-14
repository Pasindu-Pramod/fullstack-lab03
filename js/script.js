
// Typing effect
const text = "We build things, together.";
const heading = document.querySelector(".hero h1");

if (heading) {
    heading.textContent = "";

    let index = 0;

    function typeText() {
        if (index < text.length) {
            heading.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 80);
        }
    }

    typeText();
}

// Mobile menu toggle
const menuButton = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// Dark mode toggle
const darkModeButton = document.querySelector("#darkModeToggle");

if (darkModeButton) {
    darkModeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

// Active navigation link
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    });
});

// Contact form validation
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        alert("Thank you! Your message has been submitted.");
        contactForm.reset();
    });
}
// JavaScript functionality completed