define(['src/emailCollector'], function(emailCollector) {
    // eslint-disable-next-line no-useless-escape
    var emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    function validateEmail(email) {
        return emailValidator.test(email);
    }

    function validateStepFields($step) {
        var fieldsToValidate = $step.find('.js-validate');
        var fieldsNum = fieldsToValidate.length;
        var isValid = true;
        for (var i = 0; i < fieldsNum; i++) {
            if (!validateField($(fieldsToValidate[i]))) {
                isValid = false;
            }
        }
        return isValid;
    }

    function validateField($field) {
        var validationType = $field.data('validation-type').split(' ');
        var fieldValue = $field.val().trim();
        var errorMessage = '';
        var isValid = true;
        if (validationType.includes('email')) {
            if (!validateEmail(fieldValue)) {
                errorMessage = 'Please enter a valid email';
                isValid = false;
            }
        }
        if (validationType.includes('required')) {
            if (!fieldValue) {
                errorMessage = 'This field cannot be empty!';
                isValid = false;
            }
        }
        if (validationType.includes('requiredEmailsList')) {
            var emails = emailCollector.collectEmails($field);
            if (!emails.length) {
                errorMessage = 'Please add emails!';
                isValid = false;
            }
        }

        if (!isValid) {
            renderErrorMessage(errorMessage);
        }
        return isValid;
    }

    function renderErrorMessage(message) {
        console.log(message);
    }

    return {
        validateEmail: validateEmail,
        validateStepFields: validateStepFields,
        validateField: validateField
    };
});