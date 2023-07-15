import throttle from 'lodash.throttle';

const formInput = document.querySelector('.feedback-form');
formInput.addEventListener('input', throttle(onInput, 500));
formInput.addEventListener('submit', onSubmit);

updateOutput();

function onInput() {
  const inputValue = {
    email: formInput.elements.email.value,
    message: formInput.elements.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(inputValue));
}

function updateOutput() {
  const output = localStorage.getItem('feedback-form-state');
  const parsedOutput = JSON.parse(output);
  if (!parsedOutput) {
    formInput.elements.email.value = '';
    formInput.elements.message.value = '';
  } else {
    formInput.elements.email.value = parsedOutput.email;
    formInput.elements.message.value = parsedOutput.message;
  }
}

function onSubmit(evt) {
  evt.preventDefault();
  const getData = localStorage.getItem('feedback-form-state');
  console.log(JSON.parse(getData));
  localStorage.removeItem('feedback-form-state');
  evt.target.reset();
}
