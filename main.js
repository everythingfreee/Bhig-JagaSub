// Switch between Sign-Up and Sign-In forms
const signUpButton = document.getElementById("signUpButton");
const signInButton = document.getElementById("signInButton");
const signIn = document.getElementById("signIn");
const signUp = document.getElementById("signUp");
const sig = document.getElementById("sig");

signUpButton.addEventListener("click", function () {
  signIn.style.display = "none";
  signUp.style.display = "block";
});

signInButton.addEventListener("click", function () {
  signIn.style.display = "block";
  signUp.style.display = "none";
  signIn.style.margin = "auto";
  signIn.style.marginTop = "30px";
});

sig.addEventListener("click", function () {
  signIn.style.display = "block";
  signUp.style.display = "none";
  signIn.style.margin = "auto";
  signIn.style.marginTop = "30px";
});
// Save sign-up data to local storage
document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("register_fname", fname);
    localStorage.setItem("register_lname", lname);
    localStorage.setItem("register_email", email);
    localStorage.setItem("register_password", password);
    localStorage.setItem("register_userName", userName);

    alert("Registration successful! Please log in.");

    signUp.style.display = "none";
    signIn.style.display = "block";
  });

// Save sign-in data to local storage and validate login
document
  .getElementById("signInForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const signInEmail = document.getElementById("signInEmail").value;
    const signInPassword = document.getElementById("signInPassword").value;

    const registeredEmail = localStorage.getItem("register_email");
    const registeredPassword = localStorage.getItem("register_password");
    if (
      signInEmail === registeredEmail &&
      signInPassword === registeredPassword
    ) {
      localStorage.setItem("signIn_email", signInEmail);
      localStorage.setItem("signIn_password", signInPassword);
      window.location.href = "dashboard.html";
    } else {
      alert("Login failed! Please check your email and password.");
    }
  });

// Check if user is already registered and direct to the appropriate form
document.addEventListener("DOMContentLoaded", function () {
  const registeredEmail = localStorage.getItem("register_email");

  if (registeredEmail) {
    signIn.style.display = "block";
  } else {
    signUp.style.display = "block";
  }
});

//---------------------------------Dashbord--------------------------
