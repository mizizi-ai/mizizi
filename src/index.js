// Lead capture form
const leadCaptureForm = document.getElementById("lead-capture-form");

leadCaptureForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const data = {
    name,
    email,
    message,
  };

  fetch("/submit-lead-capture-form", {
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
        const targetId = tab.dataset.demoId;
        
        demoContents.forEach(content => {
            content.style.display = content.id === targetId ? 'block' : 'none';
        });

        demoTabs.forEach(t => {
            t.classList.remove('active');
        });

        tab.classList.add('active');
    });
});

// Contact form submission
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
