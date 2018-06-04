$(document).ready(function() {

	// close intro splash-screen on click shown on initial load
	$('.home-splash-screen').click(function(){
		$(this).addClass('js-is-hidden');
	});


	$('.home__slider').slick({
		fade: true,
		arrows: false,
		speed: 2000,
		autoplay: true,
  	autoplaySpeed: 4000
	});



}); //jqr

