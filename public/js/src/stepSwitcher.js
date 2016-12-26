define(function() {
    function stepSwitcher($rootElement, steps) {
        var currentStep = 0;

        steps.forEach(function(step) {
            step.onNextStep(goToNextStep);
        });

        function goToNextStep() {
            var $current = steps[currentStep].getRootElement();
            $current.hide('slide', { direction: 'left' }, 'slow');

            var next = steps[currentStep + 1];
            if (next.onShow) {
                next.onShow();
            }

            var $next = next.getRootElement();
            $next.removeClass('hidden');
            $next.css({ display: 'none' });
            $rootElement.css({ height: $next.height() });
            $next.show('slide', { direction: 'right' }, 'slow');

            currentStep++;
        }
    }

    return stepSwitcher;
});