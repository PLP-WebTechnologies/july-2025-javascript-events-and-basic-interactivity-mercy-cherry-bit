// Theme toggle
document.getElementById('theme-btn').addEventListener('click', function () {
  document.body.classList.toggle('dark');
});

// Counter logic
let count = 0;
const countDisplay = document.getElementById('count');

document.getElementById('add-btn').addEventListener('click', function () {
  count++;
  countDisplay.textContent = count;
});

document.getElementById('reset-btn').addEventListener('click', function () {
  count = 0;
  countDisplay.textContent = count;
});

// Simple form validation
document.getElementById('myForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('form-msg');
  msg.textContent = '';

  if (name === '' || email === '') {
    msg.textContent = 'Please fill out both fields.';
  } else if (!email.includes('@')) {
    msg.textContent = 'Enter a valid email.';
  } else {
    msg.textContent = 'Form submitted!';
    this.reset();
  }
});