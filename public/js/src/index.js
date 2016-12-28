define([
    'jquery',
    'jquery-ui',
    'src/proposals',
    'src/stepSwitcher',
    'src/formData',
    'src/steps/answerOptionsEdit',
    'src/steps/membersInput',
    'src/steps/proposalCreated',
    'src/steps/templateSelection'
], function($, ui, proposals, stepSwitcher, formData, answerOptionsEdit, membersInput, proposalCreated, templateSelection) {
    function init() {
        var steps = [
            templateSelection,
            answerOptionsEdit,
            membersInput,
            proposalCreated
        ];

        templateSelection.init($('.js-template-selection'), formData);
        answerOptionsEdit.init($('.js-answer-options-edit'), formData);
        membersInput.init($('.js-emails-input'), formData);
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