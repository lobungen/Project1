
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login');

    if (loginButton) {
        loginButton.addEventListener('click', function (event) {
            event.preventDefault();


            const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        alert("Cannot be empty");
        return;
    }
        
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);


    window.location.href = 'main\main.html'; 
});
    }
});


function renderLastRegisteredUser() {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    
    if (storedUsername && storedPassword) {
    
        console.log(`Stored Username: ${storedUsername}`);
    
        console.log(`Stored Password: ${storedPassword}`);
    
    } else {
        console.log("No user data found in localStorage.");
    };
}

    
    function redirectPage(url) {
        window.location.href = url; 
}


    renderLastRegisteredUser();








/*
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
*/