document.getElementById("singUpForm").addEventListener("submit", function (event) {
 event.preventDefault();

 const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])(?!\s)[a-zA-Z\d#$@!%&*?]{8,16}/m;
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 // Recojo los valores datos del formulario
 const email = document.getElementById("emailSingUp").value;
 const password1 = document.getElementById("password-1-SingUp").value;
 const password2 = document.getElementById("password-2-SingUp").value;
 const terminos = document.getElementById("terminos").checked;

 // Compruebo el email
 if (!emailRegex.test(email)) {
  Swal.fire({
   title: "Error",
   text: "El email no tiene un formato valido",
   icon: "error",
  });
  return;
 }

 // Compruebo que las contraseñas sean iguales
 if (password1 !== password2) {
  Swal.fire({
   title: "Error",
   text: "Las contraseñas no coinciden",
   icon: "error",
  });
  return;
 }

 // Compruebo el patrón de las contraseñas
 if (!passwordRegex.test(password1)) {
  Swal.fire({
   title: "Error",
   text: "La contraseña no cumple con los requisitos",
   icon: "error",
  });
  return;
 }

 // Compruebo que los términos y condiciones se aceptan
 if (!terminos) {
  Swal.fire({
   title: "Error",
   text: "Debes aceptar los términos y condiciones",
   icon: "error",
  });
  return;
 }

 let usuario = {
  email: email,
  password: password1,
 };

 let json = JSON.stringify(usuario, null, 2);

 Swal.fire({
  title: "Registrado!",
  text: json,
  icon: "success",
 });
});

document.addEventListener("DOMContentLoaded", function () {
 // Password
 const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])(?!\s)[a-zA-Z\d#$@!%&*?]{8,16}/m;

 const password1 = document.getElementById("password-1-SingUp");
 const password2 = document.getElementById("password-2-SingUp");
 const error = document.getElementById("error");

 password1.addEventListener("input", checkPasswords);
 password1.addEventListener("focus", checkPasswords);
 password2.addEventListener("input", checkPasswords);
 password2.addEventListener("focus", checkPasswords);

 function checkPasswords() {
  // Compruebo que cumpla los requisitos
  if (passwordRegex.test(password1.value)) {
   error.textContent = "";

   // Compruebo que sean iguales
   if (password1.value === password2.value) {
    error.textContent = "";
    password1.classList.remove("invalid");
    password1.classList.add("valid");
    password2.classList.remove("invalid");
    password2.classList.add("valid");
   } else {
    error.textContent = "Las contraseñas no coinciden";
    password1.classList.remove("valid");
    password1.classList.add("invalid");
    password2.classList.remove("valid");
    password2.classList.add("invalid");
   }
  } else {
   error.textContent = "8 - 16 caracteres, 1 mayuscula y 1 caracter especial";
   password1.classList.remove("valid");
   password1.classList.add("invalid");
   password2.classList.remove("valid");
   password2.classList.add("invalid");
  }
 }

 // Email
 const email = document.getElementById("emailSingUp");
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 email.addEventListener("input", checkEmail);
 email.addEventListener("focus", checkEmail);

 function checkEmail() {
  if (emailRegex.test(email.value)) {
   email.classList.remove("invalid");
   email.classList.add("valid");
  } else {
   email.classList.remove("valid");
   email.classList.add("invalid");
  }
 }
});
