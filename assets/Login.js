const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

renderLastRegistered();

function renderLastRegisteredUser() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

login.addEventListener('click', () => {
    event.preventDefault();

localStorage.setItem('username', username);
localStorage.setItem('password', password);

if (username === '') {
    displayMessage('error', 'Username cannot be blank');
} else if (password === '') {
    displayMessage('error', 'Password cannot be blank');
