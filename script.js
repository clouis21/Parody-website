const fireworksButton = document.getElementById('fireworksButton');
const fireworksContainer = document.getElementById('fireworksContainer');
const messageContainer = document.getElementById('messageContainer');

fireworksButton.addEventListener('click', () => {
    // Hide the button
    fireworksButton.style.display = 'none';

    // Display shooting stars
    fireworksContainer.innerHTML = ''; // Clear previous fireworks
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 44}px`;
        star.style.height = `${Math.random() * 44}px`;
        star.style.backgroundColor = getRandomColor();
        star.style.animationDuration = `${Math.random() * 3 + 1}s`; // Random duration between 1 to 4 seconds
        star.style.animationDelay = `${Math.random() * 5}s`; // Random delay up to 5 seconds
        fireworksContainer.appendChild(star);
    }

    // Display birthday message after 2 seconds
    setTimeout(() => {
        messageContainer.classList.remove('hidden');
    }, 2000);
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
