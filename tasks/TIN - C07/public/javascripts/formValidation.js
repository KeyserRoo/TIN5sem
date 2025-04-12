document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#accountCreationForm');

  form.addEventListener('submit', validateForm);
});

document.querySelector('#resetButton').addEventListener('click', () => {
  hideErrorContainer();
});

function validateForm(e) {
  e.preventDefault();

  let errors = [];
  let isValid = true;

  const username = document.querySelector('#username').value.trim();
  const usernameRegex = /^[a-zA-Z0-9]{3,}$/;
  if (!usernameRegex.test(username)) {
      errors.push('Nazwa użytkownika może zawierać wyłącznie litery i cyfry.');
      isValid = false;
  }

  const email = document.querySelector('#email').value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
      errors.push('Nieprawidłowy adres e-mail.');
      isValid = false;
  }

  const password = document.querySelector('#password').value.trim();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\.\,\<\>\/\\\;\:\"\'])[A-Za-z\d!@#$%^&*()\.\,\<\>\/\\\;\:\"\']{8,}$/;
  if (!passwordRegex.test(password)) {
      errors.push('Hasło musi być silne (co najmniej 8 znaków, w tym wielkie i małe litery, cyfra oraz znak specjalny).');
      isValid = false;
  }

  const errorContainer = document.querySelector('.error-container');
  if (errorContainer) {
    errorContainer.remove();
  }

  if (!isValid) {
      displayErrors(errors);
  }
}

function displayErrors(errors) {
  let errorContainer = document.createElement('div');
  errorContainer.className = 'error-container';

  errors.forEach(error => {
      const errorItem = document.createElement('p');
      errorItem.textContent = error;
      errorContainer.appendChild(errorItem);
  });

  const submitButton = document.querySelector('#submitButton');
  submitButton.parentNode.insertBefore(errorContainer, submitButton.nextSibling);

  document.getElementById('resetButton').addEventListener('click', () => {
      errorContainer.remove();
  });
}

function hideErrorContainer() {
  const errorContainer = document.querySelector('.error-container');
  if (errorContainer) {
    errorContainer.style.opacity = '0';
    errorContainer.remove();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#accountCreationForm');

  form.addEventListener('submit', validateForm);
});
