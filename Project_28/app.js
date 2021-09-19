const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

const formInputValidator = /^(?=\D{8})(?=\D*\d{2})/;

usernameInput.addEventListener('input', validate);
passwordInput.addEventListener('input', validate);

function validate(e) {
    if (e.target.id === "username") {
        if (e.target.value.length > 3) {
            e.target.classList.add('valid');
            e.target.classList.remove('invalid');
        } else {
            e.target.classList.add('invalid');
            e.target.classList.remove('valid');
        }
    }

    if (e.target.id === "password") {
        if (formInputValidator.test(e.target.value)) {
            e.target.classList.add('valid');
            e.target.classList.remove('invalid');
        } else {
            e.target.classList.add('invalid');
            e.target.classList.remove('valid');
        }
    }
}