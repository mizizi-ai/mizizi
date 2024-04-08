// Lead capture form
const form = document.getElementById("lead-capture-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const data = {
    name,
    email,
    message,
  };

  fetch("/submit-form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Your message has been sent!");
    })
    .catch((error) => {
      alert("An error occurred. Please try again.");
    });
});
// Tab switching functionality
const demoTabs = document.querySelectorAll('.demo-tab');
const demoContents = document.querySelectorAll('.demo-content');

demoTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Hide all demo content divs
        demoContents.forEach(content => {
            content.style.display = 'none';
        });

        // Remove 'active' class from all tabs
        demoTabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // Show the relevant content and mark tab as active
        const targetId = tab.dataset.demoId;
        document.getElementById(targetId).style.display = 'block';
        tab.classList.add('active');
    });
});

// Placeholder for demo-specific logic
document.querySelector('.run-demo').addEventListener('click', () => {
    // 1. Get user input from the textarea
    // 2. (Simplified) Simulate sending data to a backend for processing 
    // 3. Display AI-generated summary in the '.demo-output' div
});
// ... Other JavaScript code ...

const contactForm = document.querySelector('.contact-form form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // 1. Gather form data
    // 2. (Simplified) Simulate sending data to the backend
    // 3. Display a success message or handle errors
});
// ... Other JavaScript code ...
// AI-powered contact form routing
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const data = {
    name,
    email,
    message,
  };

  fetch("/submit-contact-form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Your message has been sent!");
    })
    .catch((error) => {
      alert("An error occurred. Please try again.");
    });
});
