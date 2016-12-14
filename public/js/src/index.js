define(['jquery'], function($) {
    $(document).ready(function() {
        var proposals = [
            {
                name: 'template-1',
                text: 'Our cranberry sauce is red\n And our fat turkey is brown\nNo politics at dinner,\nI want all smiles, no frowns\n\nThe pilgrims and the indians\nHad a nice holiday meal\nDon’t talk trump at my table\nOr shit is going to get real'
            },
            {
                name: 'template-2',
                text: 'I love you so listen,\nListen very carefully,\nKeep your shit together,\nFor the sake of our family.\n\nThe elections are over,\nWe didn’t see eye to eye.\nSo it’s better if we focus\nOn turkey and pie.\n\nIf only for a day,\nLet’s hold our tongues near,\nLest some of us stop talking\nUntil the next election year.\n\nWatch your mouth and hold your drinks,\nNo need for World War 3,\nWhat I’m trying to say is, please,\nDON’T TALK ABOUT POLITICS AROUND ME.'
            },
            {
                name: 'template-3',
                text: 'In this season of gratitude (and politics),\nLet us all agree:\n\nI love you all dearly,\nBut indulge me one thing\nTo our holiday celebrations\nDo not “your politics” bring.\n\nNo Trumping over Turkey,\nLet’s Baruch and not Barack.\nNo matter the yearn,\nResist the Bern,\nAnd keep your feelings on lock.\n\nKeep the Clintons out of Christmas,\nAs we decorate the tree\nNo elephants at tables,\nNo donkeys outside stables,\nAnd a joyous occasion this will still be.\n'
            },
            {
                name: 'template-4',
                text: 'Over the course of the past two years, America has been ripped in two by a raucous political season, which culminated in the most insanely toxic and heated environment in a very long time. So, this Thanksgiving, I think we should wipe the slate clean -- just like Hillary deleted her emails -- because it would be “WRONG” or “NOT NICE!” to quote the President-Elect, to generalize about each other!\n\nThere’s so many other things going on in each others’ and our own lives, let’s just talk about those things and skip the political banter this Turkey Day!'
            },
            {
                name: 'template-0',
                text: 'Write your own one or choose from the templates above. You can edit them as well.'
            }
        ];
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