(function($) {
	"use strict";

	if ($("body div").hasClass('fullpage--no')){
		$('#nav').addClass('nav--primary');
		$('header.header').css('background-color', 'white');
		$('header.header').css('box-shadow', '0px 0px 7px 0px rgba(0,0,0,0.20)');
	} else {
		$('#nav').removeClass('nav--primary');
		$('header.header').css('background-color', 'transparent');
		$('header.header').css('box-shadow', 'none');
	}
	///////////////////////////
	// On Scroll
	$(window).on('scroll load', function() {
		var wScroll = $(this).scrollTop();

		// fullpage no 
		
		// Back To Top Appear
		wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	});
	
	///////////////////////////
	// Btn nav collapse
	$('#nav .nav-collapse').on('click', function() {
		$('#nav').toggleClass('open');
		$('.blackout').toggleClass('visible');
	});
	///////////////////////////
	// Mobile dropdown
	$('.has-dropdown i').on('click', function() {
		$(this).parent().toggleClass('open-drop');
	});

	///////////////////////////
	// Heidth
	$('.home').removeAttr('style');
	$(window).on('resize load scroll', function() {
		var wHeight = $(this).height(),
			wWidth = $(this).width();

		// wScroll > 200 ? $('#nav').addClass('nav--primary') : $('#nav').removeClass('nav--primary');
		$('.wrap').css('height', wHeight - 70);

		if (wWidth > 1024) {
			AOS.init();
		} else {
			AOS.init({disable: 'mobile'});
			$('div').removeClass('padding-t')
			$('.fp-tableCell').removeAttr('class style')
		}

		// No fullpage

	});
	
	//////////////////////////
	// fullpage
	$('#fullpage').fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
		scrollingSpeed: 1000,
		responsiveWidth: 1025,
		paddingTop: '3em',
		// paddingBottom: '10px',
		// responsiveHeight: 768,
		onLeave: function(origin, destination, direction){
			var loadedSection = this,   
				header = document.querySelector("header.header");
				
			if(origin.index == 0 && direction =='down'){
				// if(responsiveWidth > 1024) {
					$('#nav').addClass('nav--primary');
				// } else {
				// 	$('#nav').removeClass('nav--primary');
				// }
				$('.page-num').addClass('black');
				header.style.backgroundColor = 'white';
			}
			else if(origin.index == 1 && direction =='up'){
				$('#nav').removeClass('nav--primary');
				$('.page-num').removeClass('black');
				header.style.backgroundColor = 'transparent';
			}

			if(direction == 'down'){
				$('.page-num span').text('0' + (origin.index + 2))
			} else if(direction == 'up') {
				$('.page-num span').text('0' + (origin.index ))
			}
			$('.section [data-aos]').each(function(){
				$(this).removeClass("aos-animate")
			});
		},
		afterLoad: function(){
			$('.section.active [data-aos]').each(function(){
				$(this).addClass("aos-animate")
			});
		}
	});
	$('#fullpage-page').fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4'],
		scrollingSpeed: 1000,
		responsiveWidth: 1025,
		paddingTop: '3em',
		// paddingBottom: '10px',
		// responsiveHeight: 768,
		onLeave: function(origin, destination, direction){

			if(direction == 'down'){
				$('.page-num span').text('0' + (origin.index + 2))
			} else if(direction == 'up') {
				$('.page-num span').text('0' + (origin.index ))
			}
			$('.section [data-aos]').each(function(){
				$(this).removeClass("aos-animate");
			});
		},
		afterLoad: function(){
			var header = document.querySelector("header.header");

			$('.section.active [data-aos]').each(function(){
				$(this).addClass("aos-animate")
			});
			$('#nav').addClass('nav--primary');
			$('.page-num').addClass('black');
			header.style.backgroundColor = 'white';
		}
	});
	//////////////////////////
	// Slick Slider
	$('.about-slider').slick({
		prevArrow: '<button class="btn-arrow btn-arrow-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button class="btn-arrow btn-arrow-next"><i class="fa fa-angle-right"></i></button>',
		dots: true,
		dotsClass: 'dots dots-offset',
		infinite: true,
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 721,
				settings: {
					slidesToShow: 2,
					arrows: false,
					autoplay: true,
  					autoplaySpeed: 2000,
				}
			},
			{
				breakpoint: 481,
				settings: {
					arrows: false
				}
			}
		]
	});
	$('.reviews-slider').slick({
		prevArrow: '<button class="arrow-transparent arrow-transparent-prev"></button>',
		nextArrow: '<button class="arrow-transparent arrow-transparent-next"></button>',
		infinite: true,
		fade: true,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					arrows: false,
					dots: true,
					dotsClass: 'dots dots-offset',
					autoplay: true,
  					autoplaySpeed: 2000,
				}
			}
		]
	});
	
	$('[data-aos]').each(function(){ $(this).addClass("aos-init"); });
	
})(jQuery);