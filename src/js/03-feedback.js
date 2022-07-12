import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const formData = {};

const onFormData = event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFormSubmit = event => {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
};

const dataFromLocalStorage = function () {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
};

formEl.addEventListener('input', throttle(onFormData, 500));
formEl.addEventListener('submit', onFormSubmit);
dataFromLocalStorage();
