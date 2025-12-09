const colorButton = document.getElementById('change-color-btn');

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

colorButton.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
});


const zoomImage = document.getElementById('zoom-image');

zoomImage.addEventListener('dblclick', () => {
    zoomImage.classList.toggle('zoomed');
});


const keyLoggerInput = document.getElementById('key-logger-input');
const keyOutput = document.getElementById('key-output');

keyLoggerInput.addEventListener('keydown', (event) => {
    const key = event.key;
    
    keyOutput.textContent = `You pressed: ${key}`;
});
