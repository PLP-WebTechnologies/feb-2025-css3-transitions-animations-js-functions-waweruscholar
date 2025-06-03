// User Preferences Object (In-memory storage)
let userPreferences = {
    name: '',
    theme: 'blue'
};

// Function to save user name (replaces localStorage)
function saveUserName() {
    const nameInput = document.getElementById('userName');
    const name = nameInput.value.trim();
    
    if (name) {
        // Store in memory (simulating localStorage)
        userPreferences.name = name;
        
        // Show welcome message
        showWelcomeMessage(name);
        
        // Show success message
        showMessage(`Hello ${name}! Your name has been saved.`);
        
        console.log('User preferences saved:', userPreferences);
    } else {
        alert('Please enter your name!');
    }
}

// Function to show welcome message
function showWelcomeMessage(name) {
    const welcomeDiv = document.getElementById('welcomeMessage');
    welcomeDiv.innerHTML = `Welcome back, ${name}!`;
    welcomeDiv.classList.add('animate-fadeIn');
    
    // Remove animation class after animation completes
    setTimeout(() => {
        welcomeDiv.classList.remove('animate-fadeIn');
    }, 800);
}

// Function to change theme
function changeTheme() {
    const themeSelect = document.getElementById('themeSelect');
    const selectedTheme = themeSelect.value;
    
    // Store theme preference
    userPreferences.theme = selectedTheme;
    
    // Apply theme to body
    const body = document.body;
    body.className = ''; // Clear existing theme classes
    body.classList.add(`theme-${selectedTheme}`);
    
    console.log('Theme changed to:', selectedTheme);
    showMessage(`Theme changed to ${selectedTheme}!`);
}

// Animation Functions

// Function to animate the box with pulse effect
function animateBox() {
    const box = document.getElementById('animatedBox');
    
    // Remove existing animation class
    box.classList.remove('animate-pulse');
    
    // Trigger reflow to restart animation
    box.offsetHeight;
    
    // Add pulse animation
    box.classList.add('animate-pulse');
    
    // Change box color during animation
    const originalColor = box.style.backgroundColor;
    box.style.backgroundColor = '#e74c3c';
    
    // Reset color after animation
    setTimeout(() => {
        box.style.backgroundColor = originalColor;
        box.classList.remove('animate-pulse');
    }, 2000);
    
    console.log('Box animation triggered');
}

// Function to make image bounce
function bounceImage() {
    const image = document.getElementById('bouncingImage');
    
    // Remove existing animation
    image.classList.remove('animate-bounce');
    
    // Trigger reflow
    image.offsetHeight;
    
    // Add bounce animation
    image.classList.add('animate-bounce');
    
    // Remove animation class after completion
    setTimeout(() => {
        image.classList.remove('animate-bounce');
    }, 1000);
    
    console.log('Image bounce animation triggered');
}

// Function to rotate button
function rotateButton() {
    const button = document.getElementById('rotatingButton');
    
    // Remove existing rotation
    button.classList.remove('animate-rotate');
    
    // Trigger reflow
    button.offsetHeight;
    
    // Add rotation animation
    button.classList.add('animate-rotate');
    
    // Change button text during rotation
    const originalText = button.textContent;
    button.textContent = 'Rotating...';
    
    // Reset after animation
    setTimeout(() => {
        button.classList.remove('animate-rotate');
        button.textContent = originalText;
    }, 1000);
    
    console.log('Button rotation triggered');
}

// Function to show animated message
function showMessage(customMessage = null) {
    const messageDiv = document.getElementById('messageDisplay');
    const messageText = messageDiv.querySelector('p');
    
    // Set custom message if provided
    if (customMessage) {
        messageText.textContent = customMessage;
    }
    
    // Show message with fade in animation
    messageDiv.style.display = 'block';
    messageDiv.classList.add('animate-fadeIn');
    
    // Hide message after 3 seconds
    setTimeout(() => {
        messageDiv.style.display = 'none';
        messageDiv.classList.remove('animate-fadeIn');
    }, 3000);
    
    console.log('Message displayed:', customMessage || 'Default message');
}

// Function to load saved preferences (simulating localStorage.getItem)
function loadPreferences() {
    // In a real application, this would be:
    // const saved = localStorage.getItem('userPreferences');
    // if (saved) userPreferences = JSON.parse(saved);
    
    // For this demo, we'll just log that preferences would be loaded
    console.log('Loading preferences from memory:', userPreferences);
    
    // Apply saved preferences
    if (userPreferences.name) {
        document.getElementById('userName').value = userPreferences.name;
        showWelcomeMessage(userPreferences.name);
    }
    
    if (userPreferences.theme) {
        document.getElementById('themeSelect').value = userPreferences.theme;
        changeTheme();
    }
}

// Function to save preferences (simulating localStorage.setItem)
function savePreferences() {
    // In a real application, this would be:
    // localStorage.setItem('userPreferences', JSON.stringify(userPreferences));
    
    console.log('Preferences saved to memory:', userPreferences);
}

// Advanced animation function with multiple elements
function animateMultipleElements() {
    const elements = [
        document.getElementById('animatedBox'),
        document.getElementById('bouncingImage'),
        document.getElementById('rotatingButton')
    ];
    
    // Animate each element with a delay
    elements.forEach((element, index) => {
        setTimeout(() => {
            if (element) {
                element.classList.add('animate-pulse');
                setTimeout(() => {
                    element.classList.remove('animate-pulse');
                }, 1000);
            }
        }, index * 500);
    });
}

// Function to handle button click animations
function addButtonClickAnimation(buttonElement) {
    buttonElement.addEventListener('click', function() {
        // Add click animation
        this.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
}

// Event Listeners and Initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, initializing...');
    
    // Load saved preferences
    loadPreferences();
    
    // Add click animations to all buttons
    const buttons = document.querySelectorAll('.btn, .rotating-btn');
    buttons.forEach(addButtonClickAnimation);
    
    // Add hover effects to animated elements
    const animatedBox = document.getElementById('animatedBox');
    if (animatedBox) {
        animatedBox.addEventListener('click', animateBox);
    }
    
    const bouncingImage = document.getElementById('bouncingImage');
    if (bouncingImage) {
        bouncingImage.addEventListener('click', bounceImage);
    }
    
    const rotatingButton = document.getElementById('rotatingButton');
    if (rotatingButton) {
        rotatingButton.addEventListener('click', rotateButton);
    }
    
    // Show initial welcome message
    setTimeout(() => {
        showMessage('Welcome! Try the animations and save your preferences.');
    }, 1000);
    
    console.log('JavaScript initialization complete');
});

// Utility function to get user preferences
function getUserPreferences() {
    return userPreferences;
}

// Utility function to reset all animations
function resetAllAnimations() {
    const animationClasses = ['animate-pulse', 'animate-bounce', 'animate-rotate', 'animate-fadeIn'];
    const allElements = document.querySelectorAll('*');
    
    allElements.forEach(element => {
        animationClasses.forEach(className => {
            element.classList.remove(className);
        });
    });
    
    console.log('All animations reset');
}

// Export functions (for potential module use)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        saveUserName,
        changeTheme,
        animateBox,
        bounceImage,
        rotateButton,
        showMessage,
        loadPreferences,
        savePreferences,
        resetAllAnimations
    };
}