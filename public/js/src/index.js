define(['jquery', 'jquery-ui', 'src/proposals'], function($, ui, proposals) {
    // eslint-disable-next-line no-useless-escape
    var emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    function bindEvents() {
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
                setDataForNextStep($(event.target).data('destination'));
                switchStep($currentStep, $nextStep);
            }
        });

        $('.js-answer-option-input').on('input', function(event) {
            var update = $(event.target).val();
            var autocompleteTargetName = $(event.target).data('target-btn');
            var $autocompleteTarget = $('.js-answer-options').find('.' + autocompleteTargetName);
            if (update.trim() === '') {
                update = $autocompleteTarget.data('default-value');
            }
            $autocompleteTarget.text(update);
        });

        $('.js-add-member-btn').on('click', function() {
            addMember();
        });

        $('.js-member-input').on('keyup', function(e) {
            $('.js-email-validation-error').addClass('invisible');
            if (e.keyCode === 13) {
                addMember();
            }
        });
    }

    function init() {
        setProposal('template-0');
        bindEvents();
    }

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

    function setDataForNextStep(step) {
        switch (step) {
            case 'js-answer-options-edit' :
                setCustomisedProposal();
                break;
            default:
                break;
        }
    }

    function setCustomisedProposal() {
        var proposalText = $('.js-template-selection').find('.js-proposal-textarea').val();
        $('.js-answer-options-edit').find('.js-proposal-textarea').html(proposalText);
    }

    function addMember() {
        var $email = $('.js-member-input');
        if (validateEmail($email.val())) {
            renderMember($email.val());
            $email.val('');
        } else {
            $('.js-email-validation-error').removeClass('invisible');
        }
    }

    function renderMember(email) {
        var member = $(document.createElement('span'));
        member.addClass('label label-email');
        member.html(email + ' <a><i class="icon-cross icon"></i></a>');
        $('.js-members-list').append(member).append(' ');
    }

    function validateEmail(email) {
        return emailValidator.test(email);
    }

    $(document).ready(init);
});