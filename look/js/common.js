$(function(){
	var images = document.querySelectorAll("[data-src]");
	function preloadImage(img){
		var src = img.getAttribute("data-src");
		if(!src){
			return
		}
		console.log(src);
		
		img.src = src
	}
	var imgOptions = { };

	var imgObserver = new IntersectionObserver((entries, imgObserver) => {
		entries.forEach(entry => {
			if(!entry.isIntersecting){
				return
			}else {
				preloadImage(entry.target);
				imgObserver.unobserve(entry.target)
			}
		})
	}, imgOptions);

	images.forEach(image => {
		imgObserver.observe(image)
	});
	
	
var windowWidth=$(window).width();offsetTop=$(window).scrollTop();if(offsetTop>5){$('.nav-logo').addClass('fixed');}$('.burger').on('click',function(){$('.nav__list').slideToggle(100);});$('.nav__list li').on('click',function(e){if(windowWidth<768){$('.nav__list').slideToggle(100);}});$(window).resize(function(){windowWidth=$(window).width();if(windowWidth>768){$('.nav__list').removeAttr('style');}});$(window).on('scroll',function(){if($(window).scrollTop()>5){$('.nav-logo').addClass('fixed');if(windowWidth<480){$('.topLine').css({'height':'50px','overflow':'hidden'});}}if($(window).scrollTop()<5){$('.nav-logo').removeClass('fixed');$('.topLine').removeAttr('style');if(windowWidth<480){$('.topLine').removeAttr('style');}}if($(window).scrollTop()>305){$('.up').addClass('up-toggle')}else{$('.up').removeClass('up-toggle')}});$('.up').on('click',function(e){$('body, html').animate({scrollTop:0},1000)});$('.slider').slick({arrows:false,dots:true,fade:true,autoplay:true,autoplaySpeed:2000});$('.slider-testimonials').slick({arrows:false,dots:true,autoplay:true,autoplaySpeed:2000});$('.skillbar').each(function(){var perc=$(this).attr('data-percent');if(parseFloat(perc)>100){perc=100+'%'}$(this).find('.skillbar-percent').text(perc);$(this).find('.skillbar-bar').animate({width:perc},2000)});$('.accordion > .accordion__item:eq(0) button').addClass('accordion__button_active').next().slideDown();$('.accordion button').click(function(e){$('.accordion button').not(this).removeClass('accordion__button_active');var dropDown=$(this).closest('.accordion__item').find('.accordion__panel');$(this).closest('.accordion__item').find('.accordion__panel').not(dropDown).slideUp();$('.accordion .accordion__item').find('.accordion__panel').slideUp();if($(this).hasClass('accordion__button_active')){$(this).removeClass('accordion__button_active');$('.accordion .accordion__item').find('.accordion__panel').stop()}else{$(this).addClass('accordion__button_active');}dropDown.stop(false,true).slideToggle();e.preventDefault();});var show=true;$(window).on('scroll',function(){if(!show)return false;var w_top=$(window).scrollTop();var e_top=$('.counters').offset().top;if(w_top+360>e_top){$('.counter__nums').spincrement({duration:2000});show=false}});$('.portfolio__nav li').click(function(){$('.portfolio__nav .current').removeClass('current');$(this).addClass('current');var selector=$(this).attr('data-filter');$('a[data-rel^=lightcase]').lightcase();google.maps.event.addDomListener(window,'load',init);function init(){var mapOptions={zoom:11,center:new google.maps.LatLng(40.6700,-73.9400),styles:[{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"visibility":"on"}]}]};var mapElement=document.getElementById('map');var map=new google.maps.Map(mapElement,mapOptions);var marker=new google.maps.Marker({position:new google.maps.LatLng(40.6700,-73.9400),map:map,title:'Snazzy!',icon:'img/map-marker.png',animation:google.maps.Animation.BOUNCE});}$('.slider-clients').slick({infinite:true,arrows:false,speed:300,autoplay:true,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:true,}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});$('.nav__list a').mPageScroll2id({scrollSpeed:700,scrollEasing:"easeInOutExpo",scrollingEasing:"easeInOutCirc",keepHighlightUntilNext:true});
});})