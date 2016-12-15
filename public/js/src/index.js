define(['jquery', 'jquery-ui', 'src/proposals'], function($, ui, proposals) {
    $(document).ready(function() {
        setProposal('template-0');

        $('.js-template-options').on('click', '.js-template-option', function(event) {
            var $selectedOption = $(event.target);
            var templateName = $selectedOption.data('template');
            setProposal(templateName);
            $selectedOption.siblings('.active').removeClass('active');
            $selectedOption.addClass('active');
        });


        $('.template-options-select').on('change', function() {
            var templateNum = $(this).val();
            setProposal(templateNum);
            // TODO When selecting an option here update the big selector state as well
        });


        $('.create-proposal').on('click', function() {
            var target = $('.js-template-selection');
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        });

        $('.js-submit-page').on('click', function(event) {
            var $currentStep = $(event.target).parent();
            var $nextStep = $('.' + $(event.target).data('destination'));
            if ($nextStep) {
                switchStep($currentStep, $nextStep);
            }
        });

        function setProposal(templateName) {
            var proposal = proposals.find(function(element) {
                return element.name === templateName;
            });
            $('.proposal-text').val(proposal.text);
        }

        function switchStep($current, $next) {
            $current.hide('slide', { direction: 'left' }, 'slow');
            $next.removeClass('hidden');
            $next.css({ display: 'none' });
            $('.proposal-creator').css({ height: $next.height() });
            $next.show('slide', { direction: 'right' }, 'slow');
        }
    });
});