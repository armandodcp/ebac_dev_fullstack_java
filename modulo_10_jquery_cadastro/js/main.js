function validateName(fullNameParam) {
    const arrayName = fullNameParam.split(' ');
    return arrayName.length >= 2;
}

$(document).ready(function () {
    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    });
    $('#telephone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    });
    $('#zip-code').mask('00000-000', {
        placeholder: '_____-___'
    });

    $('form').validate({
        rules: {
            name: {
                required: true,
                nameValidation: true
            },
            cpf: {
                required: true
            },
            telephone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            zipCode: {
                required: true
            },
            address: {
                required: true
            }
        },
        messages: {
            name: 'Por favor, informe o nome completo',
            cpf: 'Por favor, informe o CPF',
            telephone: 'Por favor, informe o telefone',
            email: 'Por favor, informe o e-mail',
            zipCode: 'Por favor, informe o CEP',
            address: 'Por favor, informe o endereço completo'
        },
        errorPlacement: function (error, element) {
            if (element.is('input')) {
                error.appendTo(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    $.validator.addMethod('nameValidation', function (value, element) {
        return validateName(value, element);
    }, 'Por favor, informe o nome completo');
});