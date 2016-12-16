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

        $('.js-answer-option-input').on('input', function(event) {
            var update = $(event.target).val();
            var autocompleteTargetName = $(event.target).data('target-btn');
            var $autocompleteTarget = $('.js-answer-options').find('.' + autocompleteTargetName);
            $autocompleteTarget.text(update);
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