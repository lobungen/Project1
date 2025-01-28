// Create code that will pull the locally stored data and place on the username and password fields

const storedUsername = localStorage.getItem("username");
const storedPassword = localStorage.getItem("password");

if (storedUsername && storedPassword) {
    // Get the HTML element you want to populate
  const userName = document.getElementById('username');
  const password = document.getElementById('password');

  if (storedUsername && storedPassword) {
    console.log(`Stored Username: ${storedUsername}`);

    console.log(`Stored Password: ${storedPassword}`);
  } else {
    console.log("No user data found in localStorage.");
  };

  document.getElementById("username").innerHTML = localStorage.getItem("storedUsername");
  document.getElementById("password").innerHTML = localStorage.getItem("storedPassword");

  userName.textContent = storedUsername;
 // password.textContent = storedPassword;
 password.textContent = '...';

  

  };

// Create code that will delete the locally stored user data

function clear() {
  console.log(`Stored Username: ${storedUsername}`);
};


