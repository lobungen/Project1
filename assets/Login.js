const email = document.querySelector('email');
const password = document.querySelector('password');
const login = document.querySelector('login');

const email = 'email';
const password = 'password';

function renderLastRegisteredUser() {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

login.addEventListener('click', () => {
    event.preventDefault();

localStorage.setItem('email', email);
localStorage.setItem('password', password);
renderLastRegisteredUser();