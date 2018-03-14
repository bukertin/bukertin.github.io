$(function(){

// фикс нав
	var scrollTop;
	var windowWidth = $(window).width(); // ширина окна

	var ingredientsBlock = $('.ingredients').offset().top; // расстояние до блока с ингредиентами
	$(window).on('resize', function(){
		windowWidth = $(window).width();
	});

	$(window).on('scroll', function(){
		// меняем стили фикс-нава при скролле
		scrollTop = $(this).scrollTop();
		if(scrollTop > 5) {
		 	$('.navLogo').addClass('navFixed');
		 	$('.nav__item').addClass('navFixedLinks');
		 	$('.logo').addClass('logoMin');
		} else {
		 	$('.navLogo').removeClass('navFixed');
		 	$('.nav__item').removeClass('navFixedLinks');
		 	$('.logo').removeClass('logoMin');
		}
		if (scrollTop > 1 && windowWidth < 992) {
		 	$('.logo').hide();
		}else {
		 	$('.logo').show();
		}

		// запускаем изменение прогресс баров
		if(scrollTop > ingredientsBlock + 200) {
			$('.barra-nivel').each(function() {
			  var valorLargura = $(this).data('nivel');
			  $(this).html("<span class='valor-nivel'>"+valorLargura+"</span>");
			    $(this).animate({
			        width: valorLargura
			    },2000);
			});
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



	$('.hiddenMenu').on('click', function() {
		$('.hiddenMenu ul').slideToggle(150);
	})


// slider
	$(".slider").owlCarousel({
		items: 1,
		dots: false,
		nav: true,
		autoplay: true,
		loop: true,
		navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"]
	});

	$(".customersWrap").owlCarousel({
		items: 1,
		margin: 0,
		responsive : {
		    992 : {
		        items: 2,
		        margin: 20,
		        dots: true,
				autoplay: true,
				loop: true
		    }
		}
	});

// video
	$('a[data-rel^=lightcase]').lightcase();

// counter
	var show = true
	$(window).on('scroll', function(){

		if(!show) return false;

		var w_top = $(window).scrollTop();
		var e_top = $('.counters').offset().top;
		
		if(w_top + 360 > e_top) {
			$('.counter__nums').spincrement({
				duration: 2000,
				thousandSeparator: ','
			});

			show = false
		}

		
	});

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
		        icon: 'img/spotlight-poi2.png',
		        animation: google.maps.Animation.BOUNCE
		        // API ключ AIzaSyC7j3z99yGFRB6g6C5dul5f41vdQxUsMBU
		    });
		}

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