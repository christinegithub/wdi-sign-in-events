document.addEventListener('DOMContentLoaded', function() {

  const signIn = document.querySelector('.signin');
  const submit = document.querySelector('.submit');
  const close = document.querySelector('.close');
  const modal = document.querySelector('.modal');
  const user = document.querySelector('#user');
  const password = document.querySelector('#pass');
  // const inputs = document.querySelectorAll('input');

  // When the user presses the .signin button, display the modal window
  signIn.addEventListener('click', function() {
    modal.style.display = 'block';
  });

  // When the user presses the .close button, hide the modal window
  close.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // When the user presses the .submit button, add an .error class to both input elements
  submit.addEventListener('click', function() {
    user.classList.add('error');
    password.classList.add('error');
  });

  // When the user puts their cursor in one of the input fields, remove the .error class
  user.addEventListener('click', function() {
    user.classList.remove('error');
  });

  password.addEventListener('click', function() {
    password.classList.remove('error');
  })

  // (Bonus) Allow the user to click the .modal to close itself
  // Tricky, consider what happens when two elements that are overlapping are both waiting for a click


});
