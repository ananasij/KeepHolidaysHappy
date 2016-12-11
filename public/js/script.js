
$(document).ready(function() {
	$('#template-1').on('click', function() {
		$('.send-proposal').attr('href', proposalUrl.template1);
		$('.template-option').removeClass('active');
		$(this).addClass('active');
		$('.proposal-text').html(proposalText.template1);
	});
	$('#template-2').on('click', function() {
		$('.send-proposal').attr('href', proposalUrl.template2);
		$('.template-option').removeClass('active');
		$(this).addClass('active');
		$('.proposal-text').html(proposalText.template2);
	});
	$('#template-3').on('click', function() {
		$('.send-proposal').attr('href', proposalUrl.template3);
		$('.template-option').removeClass('active');
		$(this).addClass('active');
		$('.proposal-text').html(proposalText.template3);
	});
	$('#template-4').on('click', function() {
		$('.send-proposal').attr('href', proposalUrl.template4);
		$('.template-option').removeClass('active');
		$(this).addClass('active');
		$('.proposal-text').html(proposalText.template4);
	});


	$('.template-options-select').on('change', function () {
		var templateNum=$(this).val();
		if (templateNum == 'template-1') {
			$('.send-proposal').attr('href', proposalUrl.template1);
			$('.proposal-text').html(proposalText.template1);
		}
    	if (templateNum == 'template-2') {
    		console.log('temp1');
    		$('.send-proposal').attr('href',proposalUrl.template2);
			$('.proposal-text').html(proposalText.template2);
    	}
    	if (templateNum == 'template-3') {
    		console.log('temp2');
    		$('.send-proposal').attr('href', proposalUrl.template3);
			$('.proposal-text').html(proposalText.template3);
		}
		if (templateNum == 'template-4') {
			$('.send-proposal').attr('href', proposalUrl.template4);
			$('.proposal-text').html(proposalText.template4);
		}
    });


	$('.create-proposal').on('click', function() {
		var target = $('.template-creator')
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);

	});

	var proposalText = {
		template1: 'Our cranberry sauce is red <br /> And our fat turkey is brown <br /> No politics at dinner, <br /> I want all smiles, no frowns<br /><br /> The pilgrims and the indians <br/ > Had a nice holiday meal <br /> Don’t talk trump at my table <br /> Or shit is going to get real',
		template2: 'I love you so listen, <br />Listen very carefully, <br />Keep your shit together, <br />For the sake of our family. <br /><br />The elections are over, <br />We didn’t see eye to eye. <br />So it’s better if we focus <br />On turkey and pie. <br /><br />If only for a day, <br />Let’s hold our tongues near, <br />Lest some of us stop talking <br />Until the next election year. <br /><br />Watch your mouth and hold your drinks, <br />No need for World War 3, <br />What I’m trying to say is, please, <br />DON’T TALK ABOUT POLITICS AROUND ME.',
		template3: 'In this season of gratitude (and politics), <br /> Let us all agree:<br /><br /> I love you all dearly, <br /> But indulge me one thing <br /> To our holiday celebrations <br /> Do not “your politics” bring. <br /><br /> No Trumping over Turkey, <br /> Let’s Baruch and not Barack. <br /> No matter the yearn, <br /> Resist the Bern, <br /> And keep your feelings on lock. <br /><br /> Keep the Clintons out of Christmas, <br /> As we decorate the tree <br /> No elephants at tables, <br /> No donkeys outside stables, <br /> And a joyous occasion this will still be. <br />',
		template4: 'Over the course of the past two years, America has been ripped in two by a raucous political season, which culminated in the most insanely toxic and heated environment in a very long time. So, this Thanksgiving, I think we should wipe the slate clean -- just like Hillary deleted her emails -- because it would be “WRONG” or “NOT NICE!” to quote the President-Elect, to generalize about each other! <br /><br /> There’s so many other things going on in each others’ and our own lives, let’s just talk about those things and skip the political banter this Turkey Day!'
	};

	var proposalUrl = {
		template1: 'https://docs.google.com/forms/d/1bFd7-joDVFn5tuTBQRCb2o7Xa4P1SN6zsG35VJweWZs/copy',
		template2: 'https://docs.google.com/forms/d/1PHh9ZuY20KVin2wg2qDyzUvqtokBEOaEpwcjuon7DZo/copy',
		template3: 'https://docs.google.com/forms/d/1eRgkFrbvBX3dvVzGfK8ewUDhfxIRZEEVlDTsMGP43iM/copy',
		template4: 'https://docs.google.com/forms/d/1DRbLddQS2RzMLaMTNP-PwdEYoSGaZEj6h9p7BnkhZeI/copy'
	};
});