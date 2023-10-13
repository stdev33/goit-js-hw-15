const isWhitespacesOrEmpty = (input) => {
    const regexPattern = /[^ \t\r\n\v\f]/;
    return !regexPattern.test(input);
};

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
    if (isWhitespacesOrEmpty(event.currentTarget.value)) {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = event.currentTarget.value;
    }
});
