const form = document.getElementById('form-numbers');
const numberA = document.getElementById('field-a');
const numberB = document.getElementById('field-b');
let validForm = false;

function validateNumbers(numA, numB) {
    return parseFloat(numB) > parseFloat(numA);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const successMessage = `Números validados com sucesso! O Número B: <b>${numberB.value}</b> é maior que o Número A: <b>${numberA.value}</b>`

    if (numberA.value !== '' && numberB.value !== '') {
        validForm = validateNumbers(numberA.value, numberB.value);

        if (validForm) {
            const containerSuccessMessage = document.querySelector('.success-message');
            document.querySelector('.success-message').innerHTML = successMessage;
            containerSuccessMessage.style.display = 'block';
            numberA.value = '';
            numberB.value = '';
        } else {
            numberB.classList.add('error');
            document.querySelector('.error-message').style.display = 'block';
        }
    }
});

form.addEventListener('input', function (e) {

    if (numberA.value !== '' && numberB.value !== '') {
        validForm = validateNumbers(numberA.value, numberB.value);

        if (!validForm) {
            numberB.classList.add('error');
            document.querySelector('.error-message').style.display = 'block';
        } else {
            numberB.classList.remove('error');
            document.querySelector('.error-message').style.display = 'none';
        }
    } else {
        document.querySelector('.success-message').style.display = 'none';
    }
});