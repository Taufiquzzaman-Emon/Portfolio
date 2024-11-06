var typed = new Typed(".input", {
  strings: ["Passionate Programmer", "Front-End and", "Back-End Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
var typed = new Typed(".input1", {
  strings: ["Machine-Learning Enthusiast"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var typed = new Typed(".input2", {
  strings: [
    "I am a Computer Science and Engineering graduate from Premier University, Chittagong, with a strong passion for web development and problem-solving. I specialize in creating user-friendly applications and have experience in both front-end and back-end development. Additionally, I am keen on exploring the fields of machine learning and data-driven solutions to enhance application functionality and user experience.",
  ],
  typeSpeed: 50,
  startDelay: 800,
  backSpeed: 20,
  backDelay: 1500,
  loop: true,
  showCursor: true,
});



document.addEventListener("DOMContentLoaded", function () {
  const skillBars = document.querySelectorAll(".bar");

  // Add the `inactive` class to each bar initially
  skillBars.forEach((bar) => bar.classList.add("inactive"));

  // Create an IntersectionObserver to watch the skill bars
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active"); // Start animation
          entry.target.classList.remove("inactive"); // Remove inactive class
        } else {
          entry.target.classList.remove("active"); // Remove active class to reset animation
          entry.target.classList.add("inactive"); // Add inactive class to reset
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the section is in view
    }
  );

  // Observe each skill bar
  skillBars.forEach((bar) => observer.observe(bar));
});

function handleScrollAnimation() {
  const skillsHeading = document.querySelector(".my-skills");
  const rect = skillsHeading.getBoundingClientRect();

  // Check if the element is in the viewport
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    // Add the animation class
    skillsHeading.style.opacity = "1"; // Make it visible
    skillsHeading.style.animation = "fadeInUp 0.6s forwards"; // Apply animation
  } else {
    // Reset the heading to hidden when not in view
    skillsHeading.style.opacity = "0"; // Hide it
    skillsHeading.style.animation = "none"; // Reset animation
  }
}

// Attach the scroll event listener
window.addEventListener("scroll", handleScrollAnimation);

window.addEventListener("load", () => {
  document.querySelectorAll(".progressLine span").forEach((bar, index) => {
    // Set the width based on the percentage after a delay
    setTimeout(() => {
      const percentage = bar.getAttribute("data-progress");
      bar.style.width = percentage;
    }, index * 300); // Delays each bar by 300ms
  });
});

function handleProjectScrollAnimation() {
  const projects = document.querySelectorAll(".projects1");

  projects.forEach((project) => {
    const rect = project.getBoundingClientRect();

    // Check if the element is in the viewport
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      // Add the animation class when in view
      project.style.opacity = "1"; // Make it visible
      project.style.animation = "fadeInUp 0.6s forwards"; // Apply animation
    } else {
      // Reset to hidden when out of view
      project.style.opacity = "0"; // Hide it
      project.style.animation = "none"; // Reset animation
    }
  });
}

// Add event listener for scroll event
window.addEventListener("scroll", handleProjectScrollAnimation);

function handleImageScrollAnimation() {
  const portfolioImages = document.querySelectorAll(".project-content img"); // Select all images inside .project-content

  portfolioImages.forEach((image) => {
    const rect = image.getBoundingClientRect();

    // Check if the image is in the viewport
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      // Make it visible and apply the animation
      image.style.opacity = "1";
      image.style.animation = "img3 1s ease-in forwards";
    } else {
      // Hide and reset animation when out of view
      image.style.opacity = "0";
      image.style.animation = "none";
    }
  });
}

function handleContactScrollAnimation() {
  const contactForm = document.querySelector(".contact-text"); // Select the contact form

  const rect = contactForm.getBoundingClientRect();

  // Check if the contact form is in the viewport
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    // Make the form visible and apply the animation
    contactForm.style.opacity = "1";
    contactForm.style.animation = "formAnimation 1.2s ease-out forwards";
  } else {
    // Hide and reset animation when out of view
    contactForm.style.opacity = "0";
    contactForm.style.animation = "none";
  }
}

// Add event listener for scroll
window.addEventListener("scroll", handleContactScrollAnimation);

// Add event listener for scroll event
window.addEventListener("scroll", handleImageScrollAnimation);

const contactForm = document.querySelector(".contact-form");
const formPosition = contactForm.offsetTop;

window.addEventListener("scroll", function () {
  if (window.scrollY + window.innerHeight >= formPosition) {
    contactForm.classList.add("show");
  }
});

// Initialize EmailJS with your public key
emailjs.init("jUQvncrqXq0SLZE0_");

// Event listener for form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve values from the form using the correct name attributes
    var name = document.querySelector('input[name="from_name"]').value;
    var email = document.querySelector('input[name="reply_to"]').value;
    var message = document.querySelector('textarea[name="message"]').value;

    // Send the email using EmailJS
    emailjs
      .send("service_10a9335", "template_kvrd4en", {
        to_name: "Taufiquzzaman Emon", // Your name or dynamic name
        from_name: name,
        reply_to: email,
        message: message,
      })
      .then(
        function (response) {
          alert("Message sent successfully!");
        },
        function (error) {
          alert(
            "There was an error sending the message. Please try again later."
          );
        }
      );
  });

  