define(function() {
    // eslint-disable-next-line no-useless-escape
    var emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    function validateEmail(email) {
        return emailValidator.test(email);
    }

    function checkEmptyFields(fields) {
        var fieldsNumber = fields.length;
        var emptyFields = [];
        for (var i = 0; i < fieldsNumber; i++) {
            var $field = $(fields[i]);
            if (!$field.val().trim()) {
                emptyFields.push($field.data('name-for-validation'));
            }
        }
        if (emptyFields.length) {
            return emptyFields;
        }
        return false;
    }

    function getEmptyFieldsErrorMessage(fields) {
        var message = 'Please fill the required fields in: ';
        fields.forEach(function(field, position) {
            if (position === 0) {
                message += field;
            } else {
                message += ', ' + field;
            }
        });
        return message;
    }

    function validateRequiredFields($step, $validationError) {
        var requiredFields = $step.find('.js-required');
        var emptyFields = checkEmptyFields(requiredFields);
        $validationError.text('').addClass('invisible');
        if (emptyFields) {
            var errorMessage = getEmptyFieldsErrorMessage(emptyFields);
            $validationError.text(errorMessage).removeClass('invisible');
            return false;
        }
        return true;
    }

    return {
        validateEmail: validateEmail,
        validateRequiredFields: validateRequiredFields
    };
})