const container = document.getElementById('container'); // This is your main wrapper div
const registerBtn = document.getElementById('register'); // Register button
const loginBtn = document.getElementById('login'); // Login button

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});
