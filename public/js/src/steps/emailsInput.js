define(['../validation'], function(validation) {
    var nextStepCallback;
    var $rootElement;
    var $membersList;
    var $memberInput;
    var $validationError;

    var formData;
    var emails = [];

    function init($root, sharedFormData) {
        $rootElement = $root;
        $membersList = $rootElement.find('.js-members-list');
        $memberInput = $rootElement.find('.js-member-input');
        $validationError = $rootElement.find('.js-submit-validation-error');

        formData = sharedFormData;

        bindEvents();
    }

    function bindEvents() {
        $rootElement.on('click', '.js-add-member-btn', function() {
            addMember();
        });

        $rootElement.on('keyup', '.js-member-input', function(e) {
            // TODO standardize validation
            // $('.js-member-input-container').find('.js-email-validation-error').addClass('invisible');

            if (e.keyCode === 13) {
                addMember();
            }
        });

        $rootElement.on('click', '.js-submit-page', function() {
            if (!validation.validateRequiredFields($rootElement, $validationError)) {
                return;
            }

            emails = collectEmails();
            formData.set({
                senderName: $rootElement.find('.js-sender-name-input').val(),
                senderEmail: $rootElement.find('.js-sender-email-input').val(),
                emails: emails
            });

            if (nextStepCallback) {
                nextStepCallback();
            }
        });
    }

    function addMember() {
        var $email = $memberInput;
        if (validation.validateEmail($email.val())) {
            renderMember($email.val());
            $email.val('');
        } else {
            // TODO standardize validation
            // $('.js-member-input-container').find('.js-email-validation-error').removeClass('invisible');
        }
    }

    function renderMember(email) {
        var member = $(document.createElement('span'));
        member.addClass('label label-email');
        member.html(email + ' <a><i class="icon-cross icon js-delete-icon"></i></a>');
        $membersList.append(member).append(' ');
        member.on('click', '.js-delete-icon', function(e) {
            var $label = $(e.target).parent().parent();
            $label.remove();
        });
    }

    function collectEmails() {
        var emails = [];
        var members = $membersList.find('.label-email');
        var membersLen = members.length;
        for (var i = 0; i < membersLen; i++) {
            var email = $(members[i]).text();
            emails.push(email);
        }
        return emails;
    }

    function getRootElement() {
        return $rootElement;
    }

    function onNextStep(callback) {
        nextStepCallback = callback;
    }


    return {
        init: init,
        getRootElement: getRootElement,
        onNextStep: onNextStep
    };
});