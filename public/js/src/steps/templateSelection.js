define(['../proposals', '../validation'], function(proposals, validation) {
    var nextStepCallback;
    var formData;
    var $rootElement;
    var $templateOptions;
    var $proposalText;
    var $validationError;

    function init($root, sharedFormData) {
        $rootElement = $root;
        $templateOptions = $rootElement.find('.js-template-options');
        $proposalText = $rootElement.find('.js-proposal-textarea');
        $validationError = $rootElement.find('.js-submit-validation-error');

        formData = sharedFormData;

        setProposal('template-0');
        bindEvents();
    }

    function bindEvents() {
        $templateOptions.on('click', '.js-template-option', function(event) {
            var $selectedOption = $(event.target);
            var templateName = $selectedOption.data('template');
            setProposal(templateName);
            $selectedOption.siblings('.active').removeClass('active');
            $selectedOption.addClass('active');
        });

        $rootElement.on('click', '.js-submit-page', function() {
            if (!validation.validateRequiredFields($rootElement, $validationError)) {
                return;
            }

            formData.set({ proposalText: $proposalText.val() });

            if (nextStepCallback) {
                nextStepCallback();
            }
        });
    }

    function setProposal(templateName) {
        var proposal = proposals.find(function(element) {
            return element.name === templateName;
        });
        $proposalText.val(proposal.text);
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