const form = document.getElementById('signup_form');
const name_input = document.getElementById('name');
const surname_input = document.getElementById('surname');
const email_input = document.getElementById('email');
const password_input = document.getElementById('password');
const error_message = document.getElementById('error_message');
const showPasswordCheckbox = document.getElementById('showPassword');
//const allInputs = [name_input, surname_input, email_input, password_input];



form.addEventListener('submit', (e) => {
    let errors = [];

    errors = getSignupFormErrors(name_input.value.trim(), surname_input.value.trim(), email_input.value.trim(), password_input.value.trim());

    if (errors.length > 0) {
        e.preventDefault();
        error_message.innerText = errors.join(" ");
    }
})

showPasswordCheckbox.addEventListener('change', function() {
    if (this.checked) {
        password_input.type = 'text';
    } else {
        password_input.type = 'password';
    }
});


function getSignupFormErrors(name, surname, email, password) {
    let errors = [];

    if (name === '' || name == null) {
        errors.push('Name is required');
        name_input.parentElement.classList.add('incorrect');
    }

    if (surname === '' || surname == null) {
        errors.push('Surname is required');
        surname_input.parentElement.classList.add('incorrect');
    }

    if (email === '' || email == null) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }

    if (password === '' || password == null) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    } else if (password.length < 8) {
        errors.push('Password must have at least 8 characters');
        password_input.parentElement.classList.add('incorrect');
    } else if (!/[A-Z]/.test(password)) {
        errors.push('Password must contain at least one uppercase letter');
        password_input.parentElement.classList.add('incorrect');
    } else if (!/[a-z]/.test(password)) {
        errors.push('Password must contain at least one lowercase letter');
        password_input.parentElement.classList.add('incorrect');
    } else if (!/[0-9]/.test(password)) {
        errors.push('Password must contain at least one number');
        password_input.parentElement.classList.add('incorrect');
    } else if (!/[\W_]/.test(password)) {
        errors.push('Password must contain at least one special character');
        password_input.parentElement.classList.add('incorrect');
    }

    return errors;
}