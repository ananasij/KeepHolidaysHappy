define([
    'jquery',
    'jquery-ui',
    'src/proposals',
    'src/stepSwitcher',
    'src/formData',
    'src/steps/answerOptionsEdit',
    'src/steps/emailsInput',
    'src/steps/proposalCreated',
    'src/steps/templateSelection'
], function($, ui, proposals, stepSwitcher, formData, answerOptionsEdit, emailsInput, proposalCreated, templateSelection) {
    function init() {
        var steps = [
            templateSelection,
            answerOptionsEdit,
            emailsInput,
            proposalCreated
        ];

        templateSelection.init($('.js-template-selection'), formData);
        answerOptionsEdit.init($('.js-answer-options-edit'), formData);
        emailsInput.init($('.js-emails-input'), formData);
        proposalCreated.init($('.js-proposal-created'), formData);

        stepSwitcher($('.js-steps'), steps);

        $('.create-proposal').on('click', function() {
            var target = $('.js-template-selection');
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        });
    }

    $(document).ready(init);
});