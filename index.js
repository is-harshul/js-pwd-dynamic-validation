// Initial value empty
let passwordValue = "";

// Password Field
const passwordField = document.getElementById("password-field");

// Attaching event listener
passwordField.addEventListener("keyup", updatePassword);

// Stores and updates password's value
function updatePassword() {
  passwordValue = passwordField.value;
  checkAndUpdateUI(passwordValue);
  console.log(passwordValue);
};

function successCase(el) {
  el.classList.remove("red");
  el.classList.add("green");
}

function failCase(el) {
  el.classList.add("red");
  el.classList.remove("green");
}

let checkIdArr = [
  "len6Check",
  "spCharCheck",
  "upCharCheck",
  "lowCharCheck",
  "numCheck"
];

// len6Check
// spCharCheck
// upCharCheck
// lowCharCheck
// numCheck
function checkAndUpdateUI(pass) {
  // len6Check
  if (pass.length >= 6) {
    const el = document.getElementById('len6Check');
    successCase(el);
  }
  else {
    const el = document.getElementById('len6Check');
    failCase(el);
  }
  // lowCharCheck
  if (pass.match(/[a-z]/)) {
    const el = document.getElementById('lowCharCheck');
    successCase(el);
  }
  else {
    const el = document.getElementById('lowCharCheck');
    failCase(el);
  }
  // upCharCheck
  if (pass.match(/[A-Z]/)) {
    const el = document.getElementById('upCharCheck');
    successCase(el);
  }
  else {
    const el = document.getElementById('upCharCheck');
    failCase(el);
  }
  // numCheck
  if (pass.match(/[0-9]/)) {
    const el = document.getElementById('numCheck');
    successCase(el);
  }
  else {
    const el = document.getElementById('numCheck');
    failCase(el);
  }
  // spCharCheck
  if (pass.match(/[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/)) {
    const el = document.getElementById('spCharCheck');
    successCase(el);
  }
  else {
    const el = document.getElementById('spCharCheck');
    failCase(el);
  }
}


