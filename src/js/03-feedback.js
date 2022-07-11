const formEl = document.querySelector('.feedback-form');
const inputEmailEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
const buttonEl = document.querySelector('button');

const saveInfoInput = function () {
  return console.log(inputEmailEl.value + ' ' + textareaEl.value);
};

inputEmailEl.addEventListener('input', saveInfoInput);
textareaEl.addEventListener('input', saveInfoInput);
