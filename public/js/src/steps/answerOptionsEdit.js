define(function() {
    var nextStepCallback;
    var $rootElement;
    var $proposalText;
    var $answerOptions;

    var formData;

    function init($root, sharedFormData) {
        $rootElement = $root;
        $proposalText = $rootElement.find('.js-proposal-textarea');
        $answerOptions = $rootElement.find('.js-answer-options');

        formData = sharedFormData;

        bindEvents();
    }

    function bindEvents() {
        $rootElement.on('input', '.js-answer-option-input', function(event) {
            var update = $(event.target).val();
            var autocompleteTargetName = $(event.target).data('target-btn');
            var $autocompleteTarget = $answerOptions.find('.' + autocompleteTargetName);
            if (update.trim() === '') {
                update = $autocompleteTarget.data('default-value');
            }
            $autocompleteTarget.text(update);
        });

        $rootElement.on('click', '.js-submit-page', function() {
            formData.set({
                agreeBtn: $rootElement.find('.js-answer-agree').text().trim(),
                dontknowBtn: $rootElement.find('.js-answer-dontknow').text().trim(),
                disagreeBtn: $rootElement.find('.js-answer-disagree').text().trim()
            });

            if (nextStepCallback) {
                nextStepCallback();
            }
        });
    }

    function onShow() {
        $proposalText.text(formData.get().proposalText);
    }

    function getRootElement() {
        return $rootElement;
    }

    function onNextStep(callback) {
        nextStepCallback = callback;
    }


    return {
        init: init,
        onShow: onShow,
        getRootElement: getRootElement,
        onNextStep: onNextStep
    };
});