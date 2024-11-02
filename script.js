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


const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY>0)
})
