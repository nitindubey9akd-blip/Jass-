// 1. Particle Animation (Updated emojis for Travel/Music/Mountains)
function createParticles() {
    const container = document.getElementById('background-container');
    // Emojis: Mountains, Plane, Headphones, Sparkles, Cake
    const emojis = ['🏔️', '✈️', '🎧', '✨', '🎂', '🦋']; 
    
    setInterval(() => {
        const particle = document.createElement('span');
        particle.classList.add('particle');
        particle.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Random position
        particle.style.left = Math.random() * 100 + 'vw';
        
        // Random animation duration
        particle.style.animationDuration = Math.random() * 3 + 2 + 's'; // 2s to 5s
        
        // Random size
        particle.style.fontSize = Math.random() * 20 + 10 + 'px';

        container.appendChild(particle);

        // Remove particle after animation ends to keep DOM clean
        setTimeout(() => {
            particle.remove();
        }, 5000);

    }, 300); // Create a new particle every 300ms
}

// 2. Typewriter Effect (Updated Text for Friend)
const textToType = "Happy Birthday! Jaspreet! 🎉🎂 Wishing you a day filled with love, joy, and unforgettable moments! 🥳🎈"; 
const typingElement = document.getElementById('typing-text');
let typeIndex = 0;

function typeWriter() {
    // We use [...text] to ensure emojis are treated as 1 character
    const characters = [...textToType]; 
    
    if (typeIndex < characters.length) {
        typingElement.textContent += characters[typeIndex];
        typeIndex++;
        setTimeout(typeWriter, 150); // Adjust typing speed here (150ms is standard)
    }
}

// 3. Scroll Reveal Animation (Elements fade in as you scroll)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-element');
hiddenElements.forEach((el) => observer.observe(el));

// 4. Button Click to Scroll & Play Music
function scrollToGallery() {
    // Select the audio element from the HTML
    const audio = document.getElementById('birthdaySong');
    
    // Check if audio exists and try to play it
    if (audio) {
        audio.play().catch(error => {
            console.log("Audio play failed: ", error);
        });
    }

    // Scroll to the next section
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
}

// Initialize on Load
window.onload = function() {
    createParticles(); // Start the floating particles
    typeWriter();      // Start the typing effect
};