function animation() {
	$('#care').mouseenter(function() {
		$(this).css({
			backgroundColor: '#000000',
			color: '#1fcecb'
		});
		$('#care i').hide();
		$('#care h2').hide();
		$('#care h3').hide();
		$('#care h3').slideDown('300'); 
		$('#care h2').slideDown('300'); 
		$('#care i').slideDown('300'); 
		
	});
	$('#care').mouseleave(function() {

		$('#care i').slideUp('300');
		$('#care h2').slideUp('300');
		$('#care h3').slideUp('300');


		$('#care').css({
			backgroundColor: '#ffffff',
			color: '#000000',
		});

		$('#care i').slideDown();
		$('#care h2').slideDown();
		$('#care h3').slideDown();
		
	});
	$('#alternative').mouseenter(function() {
		$(this).css({
			backgroundColor: '#000000',
			color: '#f9604f'
		});
		$('#alternative i').hide();
		$('#alternative h2').hide();
		$('#alternative h3').hide();
		$('#alternative h3').slideDown('300'); 
		$('#alternative h2').slideDown('300'); 
		$('#alternative i').slideDown('300'); 
	});
	$('#alternative').mouseleave(function() {
		$('#alternative i').slideUp('fast');
		$('#alternative h2').slideUp('fast');
		$('#alternative h3').slideUp('fast');
		$('#alternative').css({
			backgroundColor: '#ffffff',
			color: '#000000'
		});
		$('#alternative i').slideDown('fast');
		$('#alternative h2').slideDown('fast');
		$('#alternative h3').slideDown('fast');
	});
	$('#info').mouseenter(function() {
		$(this).css({
			backgroundColor: '#000000',
			color: '#77e66f'
		});
		$('#info i').hide();
		$('#info h2').hide();
		$('#info h3').hide();
		$('#info h3').slideDown('300'); 
		$('#info h2').slideDown('300'); 
		$('#info i').slideDown('300'); 
	});
	$('#info').mouseleave(function() {
		$('#info i').slideUp('fast');
		$('#info h2').slideUp('fast');
		$('#info h3').slideUp('fast');
		$('#info').delay('900').css({
			backgroundColor: '#ffffff',
			color: '#000000'
		});
		$('#info i').slideDown('fast');
		$('#info h2').slideDown('fast');
		$('#info h3').slideDown('fast');
	});
	$('#planning').mouseenter(function() {
		$(this).css({
			backgroundColor: '#000000',
			color: '#dd88d4'
		});
		$('#planning i').hide();
		$('#planning h2').hide();
		$('#planning h3').hide();
		$('#planning h3').slideDown('300'); 
		$('#planning h2').slideDown('300'); 
		$('#planning i').slideDown('300');
	});
	$('#planning').mouseleave(function() {
		$('#planning i').slideUp('fast');
		$('#planning h2').slideUp('fast');
		$('#planning h3').slideUp('fast');
		$('#planning').delay('900').css({
			backgroundColor: '#ffffff',
			color: '#000000'
		});
		$('#planning i').slideDown('fast');
		$('#planning h2').slideDown('fast');
		$('#planning h3').slideDown('fast');
	});
	$('#technology').mouseenter(function() {
		$(this).css({
			backgroundColor: '#000000',
			color: '#ffff66'
		});
		$('#technology i').hide();
		$('#technology h2').hide();
		$('#technology h3').hide();
		$('#technology h3').slideDown('300'); 
		$('#technology h2').slideDown('300'); 
		$('#technology i').slideDown('300'); 
	});
	$('#technology').mouseleave(function() {
		$('#technology i').slideUp('fast');
		$('#technology h2').slideUp('fast');
		$('#technology h3').slideUp('fast');
		$('#technology').delay('900').css({
			backgroundColor: '#ffffff',
			color: '#000000'
		});
		$('#technology i').slideDown('fast');
		$('#technology h2').slideDown('fast');
		$('#technology h3').slideDown('fast');
	});
}