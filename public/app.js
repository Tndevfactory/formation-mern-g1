const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    if (email == "") {
      emailError.innerHTML = "inserer un email svp";
    }

    if (password == "") {
      passwordError.innerHTML = "inserer un mot de passe svp";
    }

    if (email !== "" || password !== "") {
      location.href = "http://127.0.0.1:5500/dashboard.html";
    }
  });

  email.addEventListener("input", (e) => {
    emailError.innerHTML = "";
  });
  password.addEventListener("input", (e) => {
    passwordError.innerHTML = "";
  });
}