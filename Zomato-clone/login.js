const loginForm =
  document.getElementById("loginForm");

const email =
  document.getElementById("email");

const password =
  document.getElementById("password");

const emailError =
  document.getElementById("emailError");

const passwordError =
  document.getElementById("passwordError");

const showPassword =
  document.getElementById("showPassword");


// SHOW / HIDE PASSWORD

showPassword.addEventListener("click", function () {

  if (password.type === "password") {

    password.type = "text";

    showPassword.textContent = "Hide";

  } else {

    password.type = "password";

    showPassword.textContent = "Show";

  }

});


// LOGIN VALIDATION

loginForm.addEventListener("submit", function (event) {

  event.preventDefault();

  let valid = true;


  // Email validation

  if (
    email.value.trim() === "" ||
    !email.value.includes("@")
  ) {

    emailError.style.display = "block";

    valid = false;

  } else {

    emailError.style.display = "none";

  }


  // Password validation

  if (password.value.length < 6) {

    passwordError.style.display = "block";

    valid = false;

  } else {

    passwordError.style.display = "none";

  }


  // Login success

  if (valid) {

    alert("Login successful!");

    window.location.href = "index.html";

  }

});