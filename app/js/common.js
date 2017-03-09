$(document).ready(function(){

	/* поиск */
	$('.search i').click(function(){
		if ($('#search__input').hasClass('open')){
			$('#search__input').removeClass('open');
		}
		else {
			$('#search__input').addClass('open').focus().val('');
		}
	});


	/* выравнивание высоты */
	$('.catalog-item').equalHeights();


	/* Сладйдер */
	$('.owl-header').owlCarousel({
		loop: true,
		items: 1,
		dots: true,
		autoplay: true,
		autoplayTimeout: 7500,

	});


});
