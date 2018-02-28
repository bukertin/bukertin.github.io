$(function(){

	var windowWidth = $(window).width();
	offsetTop = $(window).scrollTop();


	if(offsetTop > 5){
		$('.nav-logo').addClass('fixed');
	}
	$('.burger').on('click', function(){
		$('.nav__list').slideToggle(100);
	});

	$('.nav__list li').on('click', function(e){
		if(windowWidth < 768){
			$('.nav__list').slideToggle(100);
		}
	});

	$(window).resize(function(){
		windowWidth = $(window).width();
		if(windowWidth > 768){
			$('.nav__list').removeAttr('style');
		}
	});

	
	$(window).on('scroll', function(){
		if ($(window).scrollTop() > 5) {
			$('.nav-logo').addClass('fixed');
		if(windowWidth < 480){
			$('.topLine').css({
				'height': '50px',
				'overflow': 'hidden'
			});
		}
			
		}
		if($(window).scrollTop() < 5) {
			$('.nav-logo').removeClass('fixed');
			$('.topLine').removeAttr('style');
			if(windowWidth < 480){
				$('.topLine').removeAttr('style');
			}
		}

		if($(window).scrollTop() > 305) {// кнопка "наверх"
			$('.up').addClass('up-toggle')
		}else{
			$('.up').removeClass('up-toggle')
		}
	});

	$('.up').on('click', function(e){
		$('body, html').animate({
			scrollTop: 0
		}, 1000)
	});



// слайдер
	$('.slider').slick({
		arrows: false,
		dots:true,
    	fade: true,
    	autoplay: true,
    	autoplaySpeed: 2000
	});

	$('.slider-testimonials').slick({
		arrows: false,
		dots:true,
    	autoplay: true,
    	autoplaySpeed: 2000
	});

// skills

		$('.skillbar').each(function(){
			var perc = $(this).attr('data-percent');
			if(parseFloat( perc ) > 100){
				perc = 100 + '%'
			}
			$(this).find('.skillbar-percent').text(perc)
			$(this).find('.skillbar-bar').animate({
				width: perc
			}, 2000)
		});

// accordion
	
	$('.accordion > .accordion__item:eq(0) button').addClass('accordion__button_active').next().slideDown();

	$('.accordion button').click(function(e) {
	  $('.accordion button')
	    .not(this)
	    .removeClass('accordion__button_active');
	  var dropDown = $(this).closest('.accordion__item').find('.accordion__panel');
	  
	  $(this).closest('.accordion__item').find('.accordion__panel').not(dropDown).slideUp();
	  
	  $('.accordion .accordion__item').find('.accordion__panel').slideUp();
	  
	  if ($(this).hasClass('accordion__button_active')) {
	    $(this).removeClass('accordion__button_active');
	    $('.accordion .accordion__item').find('.accordion__panel').stop()
	  } else {
	    $(this).addClass('accordion__button_active');
	  }
	  dropDown.stop(false, true).slideToggle();

	  e.preventDefault();
	});

// счетчики
	var show = true
	$(window).on('scroll', function(){

		if(!show) return false;

		var w_top = $(window).scrollTop();
		var e_top = $('.counters').offset().top;
		
		if(w_top + 360 > e_top) {
			$('.counter__nums').spincrement({
				duration: 2000
			});

			show = false
		}

		
	});

// portfolio
	var $container = $('.works');
	$container.isotope({
		filter: '*',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
		}
	});
	 
	$('.portfolio__nav li').click(function(){
		$('.portfolio__nav .current').removeClass('current');
		$(this).addClass('current');

		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
		return false;
	});

	// lightcase
	$('a[data-rel^=lightcase]').lightcase();

// google maps 

	// When the window has finished loading create our google map below
	google.maps.event.addDomListener(window, 'load', init);
	
	function init() {
	    // Basic options for a simple Google Map
	    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	    var mapOptions = {
	        // How zoomed in you want the map to start at (always required)
	        zoom: 11,

	        // The latitude and longitude to center the map (always required)
	        center: new google.maps.LatLng(40.6700, -73.9400), // New York

	        // How you would like to style the map. 
	        // This is where you would paste any style found on Snazzy Maps.
	        styles: [{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"visibility":"on"}]}]
	    };

	    // Get the HTML DOM element that will contain your map 
	    // We are using a div with id="map" seen below in the <body>
	    var mapElement = document.getElementById('map');

	    // Create the Google Map using our element and options defined above
	    var map = new google.maps.Map(mapElement, mapOptions);

	    // Let's also add a marker while we're at it
	    var marker = new google.maps.Marker({
	        position: new google.maps.LatLng(40.6700, -73.9400),
	        map: map,
	        title: 'Snazzy!',
	        icon: 'img/map-marker.png',
	        animation: google.maps.Animation.BOUNCE
	        // API ключ AIzaSyC7j3z99yGFRB6g6C5dul5f41vdQxUsMBU
	    });
	}

// client slider
	$('.slider-clients').slick({
		infinite: true,
		arrows: false,
		speed: 300,
		autoplay: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

// smooth scroll
	$('.nav__list a').mPageScroll2id({
		// offset: ".nav",
		scrollSpeed: 700,
		scrollEasing: "easeInOutExpo",
		scrollingEasing: "easeInOutCirc",	// Устанавливает easing, который будет проигрываться если вызвать её уже во время изинга(кликнуть по ссылке во время прокрутки)
		// clickedClass: "active",	// Устанавливает класс для ссылки, при клике на неё
		// targetClass: "color-block",	// Устанавливает класс для блока, при его появлении во время скролла
		// highlightClass: "active",	// Устанавливает класс для ссылки, при скролле до привязанного к нему блоку
		keepHighlightUntilNext: true	// Один эллемент всегда будет выделен
	});

});