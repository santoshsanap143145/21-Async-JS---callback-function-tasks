const cl = console.log;

const snackBar = (msg, icon) => {
  swal.fire({
    title: msg,
    timer: 1500,
    icon: icon,
  });
};

const signInForm = document.getElementById("signInForm");
const emailVal = document.getElementById("email");
const passwordVal = document.getElementById("password");

const signIn = (email, password) => {
  if (email == "santoshsanap@gmail.com" && password == "Santoshsanap143") {
    snackBar("you have logged In successfully !!!", "successs");
  } else {
    snackBar("Invalid Email or Password", "error");
  }
};

const signInOnClick = (eve) => {
  eve.preventDefault();
  let email = emailVal.value;
  let password = passwordVal.value;
  signInForm.reset();
  signIn(email, password);
};

signInForm.addEventListener("submit", signInOnClick);


