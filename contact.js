const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', event => {
  
  // Check if name, email, and message fields are filled out
  form.addEventListener('submit', event => {
  // Check if name, email, and message fields are filled out
  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    errorMessage.textContent = 'Please fill out all fields.';
    event.preventDefault();
    return;
  }
  ...


  // Check if the email address is valid
  if (!isValidEmail(emailInput.value)) {
    errorMessage.textContent = 'Please enter a valid email address.';
    return;
  }

  // Send form data to server or display a thank you message
  form.reset();
  errorMessage.textContent = '';
  alert('Form submitted successfully!')
});

function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
