$(function(){
	// видео фон
		$("#bgndVideo").YTPlayer();

	// верхняя навигация
		$('.nav-btn').on('click', function(){
			$('.nav__list').slideToggle(200)
		})

		$(window).resize(function() {
		    if ($(window).width() > 768) {
		      $('nav ul').removeAttr('style');
		    }
		  });

	// progress bar
		function sirkl(el){
		  $(el).circleProgress({fill: {color: '#ff7550'}})
		    .on('circle-animation-progress', function(event, progress, stepValue){
				$(this).find('strong').text(parseInt(stepValue * 100) + '%')
			});  
		};
		sirkl('.first-sirkl');

	// trips carousel
		$(".trips-slider").owlCarousel({
			items: 3,
			dots: false,
			nav: true,
			margin: 20,
			autoplay: true,
			loop: true,
			navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
			responsive:{
			        0:{
			            items:1
			        },
			        768:{
			            items:2
			        },
			        992:{
			            items:3
			        }
			    }
		});

	// isotop filter
		var $container = $('.filterBlock');
		$container.isotope({
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});

		$('.filter__list li').click(function(){
			$('.filter__list .current').removeClass('current');
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

	// trips carousel
		$(".testimonial-slider").owlCarousel({
			items: 1,
			dots: false,
			nav: true,
			autoplay: true,
			loop: true,
			navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
			
		});

	// video
		$('a[data-rel^=lightcase]').lightcase();

	// clients
		$('.client-slider').owlCarousel({
			items: 5,
			dots: false,
			nav: false,
			autoplay: false,
			loop: true,
			responsive:{
				0:{
					items:3
				},
				768:{
					items:4
				},
				992:{
					items:5
				}
			}
		});

	// galery



});