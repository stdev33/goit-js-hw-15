const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", onLoginFormSubmit);

function onLoginFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
    alert("All fields must be filled!");
    return;
  }

  const loginData = {
    email,
    password,
  };

  console.log(loginData);

  event.currentTarget.reset();
}
