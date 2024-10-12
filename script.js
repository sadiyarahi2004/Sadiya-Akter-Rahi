
// Function to speak a welcome message
// function speakWelcome() {
//     const msg = new SpeechSynthesisUtterance("Welcome to my website!");
//     window.speechSynthesis.speak(msg);
// }


// window.onload = () => {
//     speakWelcome();
// };


// let voicePlayed = false;


// document.addEventListener('visibilitychange', () => {
//     if (document.visibilityState === 'visible' && !voicePlayed) {
//         playWelcomeVoice();
//         voicePlayed = true; 
//     }
// });

// ... rest of your existing code ...


const toggleButton = document.getElementById('toggle-button');
const body = document.body;
const themeLabel = document.getElementById('theme-label');
const fontSizeSelect = document.getElementById('font-size');
const colorThemeSelect = document.getElementById('color-theme');
const fontStyleSelect = document.getElementById('font-style');
const backgroundImageSelect = document.getElementById('background-image');
const textColorInput = document.getElementById('text-color');
const toggleAnimations = document.getElementById('toggle-animations');
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');
const loader = document.getElementById('loader');
const settingsBtn = document.getElementById('settings-btn');
const settingsModal = document.getElementById('settings-modal');
const closeSettingsBtn = document.getElementById('close-settings');
const resetSettingsBtn = document.getElementById('reset-settings');





// Hide the loader once the page has fully loaded
window.addEventListener('load', () => {
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.visibility = 'hidden';
    }, 500); // Wait for the fade-out transition
});






settingsBtn.addEventListener('click', () => {
    settingsModal.classList.toggle('hidden');
});

closeSettingsBtn.addEventListener('click', () => {
    settingsModal.classList.add('hidden');
});

toggleButton.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    updateThemeLabel();
});



document.addEventListener('DOMContentLoaded', () => {
    const fontStyleSelect = document.getElementById('fontStyle');

    // Load saved font style from localStorage
    const loadFontStyle = () => {
        const savedFont = localStorage.getItem('fontStyle');
        if (savedFont) {
            fontStyleSelect.value = savedFont;
            document.body.style.fontFamily = savedFont; // Set font style
        }
    };

    // Update the font style when the user selects a new option
    fontStyleSelect.addEventListener('change', () => {
        const selectedFont = fontStyleSelect.value;
        document.body.style.fontFamily = selectedFont; // Set font style
        localStorage.setItem('fontStyle', selectedFont); // Save the selected font style
    });

    // Load font style on page load
    loadFontStyle();
});
fontSizeSelect.addEventListener('change', (event) => {
    body.style.fontSize = event.target.value;
});


colorThemeSelect.addEventListener('change', (event) => {
    body.classList.remove('pastel', 'vibrant');
    if (event.target.value) {
        body.classList.add(event.target.value);
    }
});

backgroundImageSelect.addEventListener('change', (event) => {
    if (event.target.value) {
        body.style.backgroundImage = `url('./images/${event.target.value}.jpg')`;
        body.style.backgroundSize = 'cover';
        body.style.backgroundRepeat = 'no-repeat';
    } else {
        body.style.backgroundImage = 'none';
    }
});

textColorInput.addEventListener('input', (event) => {
    body.style.color = event.target.value;
});




resetSettingsBtn.addEventListener('click', () => {
    toggleButton.checked = false;
    body.classList.remove('dark-mode', 'pastel', 'vibrant');
    body.style.fontSize = '16px'; // Reset to default font size
    fontSizeSelect.value = '16px'; // Reset select to default
    colorThemeSelect.value = ''; // Reset select to default
    backgroundImageSelect.value = ''; // Reset select to default
    body.style.backgroundImage = 'none'; // Remove background image

    textColorInput.value = '#333333'; // Reset text color
    body.style.color = '#333333'; // Reset body text color
    updateThemeLabel();
    toggleAnimations.checked = true; // Reset animations toggle
});


function updateThemeLabel() {
    themeLabel.textContent = body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
}





function changeBackground(event) {
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.body.style.backgroundImage = `url(${e.target.result})`;
            document.body.style.backgroundSize = 'cover'; // Cover the entire screen
            document.body.style.backgroundPosition = 'center'; // Center the image
        }
        reader.readAsDataURL(file);
    }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Here you can handle form submission (e.g., send data to a server)
    


    // Optionally, reset the form
    this.reset();
});











document.addEventListener("mousemove", (e) => {
    const cursorTrail = document.getElementById("cursor-trail");
    cursorTrail.style.left = `${e.pageX}px`;
    cursorTrail.style.top = `${e.pageY}px`;
});




document.getElementById('year').textContent = new Date().getFullYear();





document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email  || !message) {
        alert('Please fill out all required fields.');
        event.preventDefault(); // Prevent form submission
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector('.loader');

    // Simulate loading completion
    setTimeout(() => {
        loader.innerHTML = "<h2>Loaded!</h2>";
    }, 5000); // Change this duration to simulate longer loading
});







    window.addEventListener('scroll', function() {
        const headline = document.querySelector('.headline');
        const scrollPosition = window.scrollY;

        // Change opacity based on scroll position
        if (scrollPosition > 50) {
            headline.classList.add('hidden');
        } else {
            headline.classList.remove('hidden');
        }
    });




    const linkItems = document.querySelectorAll(".link-item");
    linkItems.forEach((linkItem, index) => {
        linkItem.addEventListener("click", () => {
            document.querySelector(".active").classList.remove("active");
            linkItem.classList.add("active");
            const indicator = document.querySelector(".indicator");
            indicator.style.left = `${index * 95 + 48}px`;
        })
    })




    


    window.setTimeout(function(){
        $('.skill-progress').addClass("go");
      }, 1000);