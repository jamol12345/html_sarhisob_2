const title = "Salom, dunyo!";
let counter = 0;
let isActive = true;

const heading = document.getElementById("heading");
const btn = document.getElementById("myButton");
const input = document.getElementById("myInput");
const form = document.getElementById("myForm");
const img = document.getElementById("myImage");

if (heading) heading.textContent = title;
if (img) img.src = "https://via.placeholder.com/150";

if (btn && heading) {
  btn.addEventListener("click", function() {
    counter++;
    heading.textContent = `Siz ${counter} marta bosdingiz`;
    isActive = !isActive; 
    console.log("Tugma bosildi. isActive:", isActive);
  });
}

if (input && heading) {
  input.addEventListener("input", function(e) {
    heading.textContent = `Siz yozdingiz: ${e.target.value}`;
  });
}

if (form && input) {
  form.addEventListener("submit", function(e) {
    e.preventDefault(); 
    const name = input.value.trim();
    if(name === "") {
      alert("Iltimos, ism kiriting!");
    } else {
      alert(`Salom, ${name}!`);
    }
  });
}

// Login form handling
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

if (loginForm && emailInput && passwordInput) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    console.log("Login submitted:", { email, password });
  });
}
