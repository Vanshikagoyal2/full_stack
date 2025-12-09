const passwordInput = document.getElementById('password-input');
const strengthBar = document.getElementById('password-strength-bar');
const strengthMessage = document.getElementById('strength-message');

passwordInput.addEventListener('input', checkPasswordStrength);

function checkPasswordStrength() {
    const password = passwordInput.value;
    let score = 0;
    
    strengthMessage.className = '';
    
    if (password.length === 0) {
        strengthBar.style.width = '0%';
        strengthBar.style.backgroundColor = '';
        strengthMessage.textContent = 'Type a password to check its strength.';
        return;
    }

    if (password.length >= 8) {
        score++;
    }

    if (password.match(/[A-Z]/)) {
        score++;
    }

    if (password.match(/[a-z]/)) {
        score++;
    }

    if (password.match(/[0-9]/)) {
        score++;
    }

    if (password.match(/[^A-Za-z0-9]/)) {
        score++;
    }

    let strengthText = '';
    let barClass = '';

    if (score <= 2) {
        strengthText = 'Weak';
        barClass = 'weak';
    } else if (score === 3) {
        strengthText = 'Medium';
        barClass = 'medium';
    } else if (score >= 4) {
        strengthText = 'Strong';
        barClass = 'strong';
    }
    
    strengthBar.style.width = (score * 20) + '%'; 
    
    strengthBar.className = barClass;

    strengthMessage.textContent = `Strength: ${strengthText}`;
    strengthMessage.classList.add(barClass);
}
