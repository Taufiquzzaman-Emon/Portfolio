var typed = new Typed(".input",{
    strings: ["Passionate Programmer","Front-End and", "Back-End Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
var typed = new Typed(".input1",{
    strings: ["Machine-Learning Enthusiast"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
// Define an array of simple, cohesive sentences
// const messages = [
//     "I'm a CSE graduate diving into web development.",
//     "I'm passionate about creating user-friendly applications.",
//     "Exploring both front-end and back-end development.",
//     "Interested in machine learning and data-driven solutions.",
// ];

// var typed = new Typed(".input2", {
//     strings: messages,
//     typeSpeed: 30,      // Slower typing speed for readability
//     backSpeed: 20,      // Smooth backspace speed
//     backDelay: 1500,    // Pause before deleting
//     startDelay: 500,    // Initial delay for smooth start
//     loop: true          // Enable looping
// });
var typed = new Typed(".input2",{
    strings: ["I am a Computer Science and Engineering graduate from Premier University, Chittagong, with a strong passion for web development and problem-solving. I specialize in creating user-friendly applications and have experience in both front-end and back-end development. Additionally, I am keen on exploring the fields of machine learning and data-driven solutions to enhance application functionality and user experience."],
    typeSpeed:50,
    startDelay:800,
    backSpeed:20,
    backDelay:1500,
    loop:true,
    showCursor:true
})

document.addEventListener("DOMContentLoaded", function() {
    const skillBars = document.querySelectorAll(".bar");

    // Add the `inactive` class to each bar initially
    skillBars.forEach(bar => bar.classList.add("inactive"));

    // Create an IntersectionObserver to watch the skill bars
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active"); // Start animation
                entry.target.classList.remove("inactive"); // Remove inactive class
            } else {
                entry.target.classList.remove("active"); // Remove active class to reset animation
                entry.target.classList.add("inactive"); // Add inactive class to reset
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the section is in view
    });

    // Observe each skill bar
    skillBars.forEach((bar) => observer.observe(bar));
});

function handleScrollAnimation() {
    const skillsHeading = document.querySelector('.my-skills');
    const rect = skillsHeading.getBoundingClientRect();
    
    // Check if the element is in the viewport
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        // Add the animation class
        skillsHeading.style.opacity = '1'; // Make it visible
        skillsHeading.style.animation = 'fadeInUp 0.6s forwards'; // Apply animation
    } else {
        // Reset the heading to hidden when not in view
        skillsHeading.style.opacity = '0'; // Hide it
        skillsHeading.style.animation = 'none'; // Reset animation
    }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScrollAnimation);

window.addEventListener('load', () => {
    document.querySelectorAll('.progressLine span').forEach((bar, index) => {
        // Set the width based on the percentage after a delay
        setTimeout(() => {
            const percentage = bar.getAttribute('data-progress');
            bar.style.width = percentage;
        }, index * 300); // Delays each bar by 300ms
    });
});
