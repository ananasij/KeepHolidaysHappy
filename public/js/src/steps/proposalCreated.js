define(function() {
    var nextStepCallback;
    var $rootElement;
    var formData;

    function init($root, sharedFormData) {
        $rootElement = $root;
        formData = sharedFormData;
    }

    function onShow() {
        console.log('Got ze data');
        console.log(formData.get());
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