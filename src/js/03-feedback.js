// const formEl = document.querySelector('.feedback-form');
// const inputEmailEl = document.querySelector('input');
// const textareaEl = document.querySelector('textarea');
// const buttonEl = document.querySelector('button');

// const saveInfoInput = function () {
//   return console.log(inputEmailEl.value + ' ' + textareaEl.value);
// };

// inputEmailEl.addEventListener('input', saveInfoInput);
// textareaEl.addEventListener('input', saveInfoInput);

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const formData = {};

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
})();
