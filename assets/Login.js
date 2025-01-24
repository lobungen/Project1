const postEl = document.querySelector('post');

function storeLocalStorage(data) {
    const existingData = readLocalStorage();
    existingData.push(data){
        localStorage.setItem('post', JSON.stringify(existingData));
    }};

document.getElementById('post').addEventListener('login',function (event){
    event.preventDefault();
    });

const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

renderLastRegistered();

function renderLastRegisteredUser() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
};


if (username === '') {
    displayMessage('error', 'Username cannot be blank');
} else if (password === '') {
    displayMessage('error', 'Password cannot be blank');
};