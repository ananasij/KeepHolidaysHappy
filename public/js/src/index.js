define(['jquery', 'src/proposals'], function($, proposals) {
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

        function setProposal(templateName) {
            var proposal = proposals.find(function(element) {
                return element.name === templateName;
            });
            $('.proposal-text').val(proposal.text);
        }
    });
});