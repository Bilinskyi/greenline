
$(document).ready(function(){


	$('.m-h-2').matchHeight({
		byRow: false 
	});
	$('.wrapp-service > div').matchHeight();


	$('.btn-hide').on('click', function(e) {
		e.preventDefault(); 
		$(this).next().slideToggle(); 
	});


	var flag = true;
	$(window).on('load', function() {

		$('.main-nav > li:nth-child(2)').on('click', function(e) {
			if (window.innerWidth < 1054) {
				e.preventDefault();
				$(this).find('ul').slideToggle();
			} else {
				$('.main-nav > li:nth-child(2)').on('click', function(e) {
					e.preventDefault();
				})
			}
		})

	})


	$('.section-carousel-1').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			center: true,
			autoHeight: true,
			touchDrag: false,
			mouseDrag: false,
			dots: true,
			dotsEach: true,
			responsiveClass:true,
			responsiveClass:true,
			navText: ['',''],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});


		var widthItem = $(".section-carousel-1 .owl-item").width();
		$(".owl-item .item").css("width", widthItem +1)


	$(window).on('load', function() {



		




		var owl = $('.section-carousel-2');
		owl.owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			center: true,
			autoHeight: true,
			touchDrag: false,
			mouseDrag: false,
			dots: false,
			dotsEach: true,
			responsiveClass:true,
			responsiveClass:true,
			navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
			responsive:{
				0:{
					items:1,
					stagePadding: 0
				},
				600:{
					items:1,
					stagePadding: 0
				},
				1000:{
					items:1,
					stagePadding: 0
				},
				1050:{
					items:1,
					stagePadding: 0
				},
				1200:{
					items:1,
					stagePadding: 80
				},
				1240:{
					items:1,
					stagePadding: 20
				},
				1300:{
					items:1,
					stagePadding: 45
				},
				1350:{
					items:1,
					stagePadding: 65
				},
				1400:{
					items:1,
					stagePadding: 85
				},
				1500:{
					items:1,
					stagePadding: 120
				},
				1600:{
					items:1,
					stagePadding: 160
				},
				1700:{
					items:1,
					stagePadding: 210
				},
				1800:{
					items:1,
					stagePadding: 250
				},
				2000:{
					items:1,
					stagePadding: 330
				},
				2200:{
					items:1,
					stagePadding: 400
				}
			}
		});



		$('.customNextBtn').click(function() {
			owl.trigger('next.owl.carousel');
		})
		$('.customPrevBtn').click(function() {
			owl.trigger('prev.owl.carousel', [300]);
		})













		$('.slider-3').owlCarousel({
			loop:true,
			nav:false,
		// center: true,
		margin: 0,
		autoHeight: false,
		touchDrag: false,
		mouseDrag: false,
		dots: true,
		dotsEach: true,
		responsiveClass:true,
		responsiveClass:true,
		navText: ['',''],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1100:{
				items:2
			},
			1200:{
				items:3
			},
			1300:{
				items:5
			}
		}
	});


		$('.slider-3 .item').matchHeight();

	});



 //    $("a.modal-form").fancybox({
 //       'hideOnContentClick': true,
 //          minWidth : 230,
 //          padding : 0,
 //          closeBtn : true
 
 // });

// $('header a[href^="#"]').on('click', function(event) {

//     var target = $( $(this).attr('href') );

//     if( target.length ) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: target.offset().top -85
//         }, 600);
//     }

// });



//  jQuery(function($){ 
//    $(".phone_mask_1").mask("+7(999) 999-9999");
//    $("#phone_mask_2").mask("+7(999) 999-9999");
// });

$('input,textarea').focus(function(){
	$(this).data('placeholder',$(this).attr('placeholder'))
	.attr('placeholder','');
}).blur(function(){
	$(this).attr('placeholder',$(this).data('placeholder'));
});

});