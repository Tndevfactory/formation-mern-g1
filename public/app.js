// collecte des information de la page html
const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = e.target[0].value;
  const password = e.target[1].value;

  if (email === "") {
    emailError.innerHTML = "Veuillez entrez l'adresse mail";
  }

  if (password === "") {
    passwordError.innerHTML = "Veuillez entrez le mot de passe";
  }
});
