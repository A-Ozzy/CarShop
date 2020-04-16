$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		adaptiveHight:true,
		slidesToShow:4,
		slidesToScroll:2,
		speed:2000,
		easing:'ease',
		infinite:true,
		autoplay:false,
		autoplaySpeed:700,
		waitForAnimate: false,
	});
});

$(document).ready(function(){
	$('.award__slider').slick({
		arrows:true,
		dots:true,
		adaptiveHight:true,
		slidesToShow:3,
		slidesToScroll:2,
		speed:1000,
		easing:'ease',
		infinite:true,
		autoplay:false,
		autoplaySpeed:800,
		waitForAnimate: false,
		asNavFor: ".review__slider",
	});
});

$(document).ready(function(){
	$('.review__slider').slick({
		arrows:false,
		asNavFor: ".award__slider",
		dots:false,
		adaptiveHight:true,
		slidesToShow:3,
		slidesToScroll:2,
		speed:1000,
		easing:'ease',
		infinite:true,
		autoplay:false,
		autoplaySpeed:800,
		waitForAnimate: false,
	});
});
































/*$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
*/
