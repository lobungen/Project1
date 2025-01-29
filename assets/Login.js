document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("login");
  const modal = document.getElementById("error");
  const closeModal = document.querySelector(".close-button");

  if (loginButton) {
    loginButton.addEventListener("click", function (event) {
      event.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username === "" || password === "") {
        modal.style.display = "block";
        return;
      }

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);


      window.location.href = "/main/main.html";
    });
  }
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
});

const postEl = document.querySelector("post");

function storeLocalStorage(data) {
  const existingData = readLocalStorage();

  existingData.push(data);

  localStorage.setItem("post", JSON.stringify(existingData));
}

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

function renderLastRegisteredUser() {
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (storedUsername && storedPassword) {
    console.log(`Stored Username: ${storedUsername}`);

    console.log(`Stored Password: ${storedPassword}`);
  } else {
    console.log("No user data found in localStorage.");
  }
}

function redirectPage(url) {
  window.location.href = url;
}

/*
    renderLastRegisteredUser();



const postEl = document.querySelector('post');

function storeLocalStorage(data) {
    const existingData = readLocalStorage();
    existingData.push(data) {
        localStorage.setItem('post', JSON.stringify(existingData));
    };
};

document.getElementById('post').addEventListener('login',function (event){
    event.preventDefault();
    });

const username = document.getElementById('username').value;
const password = document.getElementById('password').value;


function renderLastRegisteredUser() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
};


if (username === '') {
    displayMessage('error', 'Username cannot be blank');
} else if (password === '') {
    displayMessage('error', 'Password cannot be blank');
};
*/
