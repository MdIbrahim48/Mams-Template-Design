//Sticky Nav
	$(window).scroll(function(){
		if($(this).scrollTop() >= 100){
			$('.edu-navbar').addClass('fixed-navbar');
		}else{
			$('.edu-navbar').removeClass('fixed-navbar');
		}
	});
	//Scroll Spy		
		$('body').scrollspy({ target: '.edu-navbar' });
		 $(window).on('load', function(e){
		  $('#status').fadeOut();
		  $('#preloader').delay(350).fadeOut('slow');
		  $('body').delay(350).css({'overflow':'visible'});
		})
		 $('body').scrollspy({ target: ".edu-navbar'" })

		 
 //navbar toggle-bar
   $('.navbar-toggler').click(function(){
    $(this).toggleClass('active')
   });



//jQuery Counter	
	$('.counter').counterUp({
		delay: 10,
		time:1000
	});		

	//Video Popup	
		$('.video-iframe').magnificPopup({
			type: 'iframe',
			iframe: {
				markup: '<div class="mfp-iframe-scaler">' +
					'<div class="mfp-close"></div>' +
					'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
					'</div>',
				patterns: {
					youtube: {
						index: 'youtube.com/',
						id: 'v=',
						src: 'http://www.youtube.com/embed/%id%?autoplay=1'
					}
				},
				srcAction: 'iframe_src'
			}
		});	




// Slick slider	index version
	$('.slide-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow:3,
		slidesToScroll: 1,
		asNavFor: '.slide-for',
		dots: false,
		height:true,
		centerMode: true,
		centerPadding: '0px',
		focusOnSelect: true,
		variableWidth: false,
		arrows: true

	});


	// notice-slider
	$("#bolg-carousel-01").owlCarousel({
		items :1,
		lazyLoad : true,
		navigationText :["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		slideSpeed: 500,
		paginationSpeed: 1000,
		rewindSpeed: 1000,	
		navigation :true,
		pagination: false,
		responsive:false
    });

	// notice-slider
//  $('.notice-slider-wrapper').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:2,
//             nav:false
//         },
//         1000:{
//             items:1,
//             nav:true,
//             loop:false
//         }
//     }
// })